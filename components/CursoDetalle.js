import Image from "next/image"
import { formatearFecha } from "../helpers";
import styles from "../styles/Curso.module.css"

const CursoDetalle = ({curso}) => {
    const {titulo, contenido, imagen, created_at, descripcion } = curso

    return ( 
        <div>
            <h1 className="heading">{titulo}</h1>
            <Image src={imagen.url} layout="responsive" width={600} height={300} alt={titulo} />
            <p className={styles.fecha}>{formatearFecha(created_at)}</p>
            <p className={styles.descripcion}>{descripcion}</p>
        </div> );
}
 
export default CursoDetalle;