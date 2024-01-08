import { Link, useLocation, useParams } from "react-router-dom";
import style from "./VanDetail.module.css";
import { useState, useEffect } from "react";
import Button from "../../components/button/Button";

const VanDetail = () => {
  const params = useParams();
    const location = useLocation();
    const search = location.state?.search || ""

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <section className={style.van_details_container}>
      <span className={style.link}>
        {" "}
        &larr;{" "}
              <Link
                  to={`..${search}`}
                relative="path">
          Back to all vans
        </Link>
      </span>
      {van ? (
        <div className={style.van_detail}>
          <img src={van.imageUrl} alt={van.name} />
          <i className={`van-type ${van.type} selected`}>
            {van.type[0].toUpperCase() + van.type.slice(1)}
          </i>
          <h2>{van.name}</h2>
          <p>
            <span className={style.price}>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <Button text={"Rent this van"} bgColor={"#FF8C38"} />
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </section>
  );
};

export default VanDetail;
