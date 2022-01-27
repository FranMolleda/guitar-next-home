import Layout from "../components/Layout"
import CursoDetalle from "../components/CursoDetalle"

const Cursos = ({curso}) => {
    return ( 
    <Layout pagina="curso">
         <main className="contenedor">
          <CursoDetalle curso={curso}/>
        </main>
    </Layout>
     );
}

export async function getServerSideProps() {
 const cursoUrl = `${process.env.API_URL}/cursos`
 const response = await fetch(cursoUrl)
 const curso = await response.json()
console.log(curso)
 return {
     props:{curso}
 }
}
 
export default Cursos;