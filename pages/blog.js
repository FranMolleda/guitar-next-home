import Layout from "../components/Layout";
import ListadoBlog from "../components/ListadoBlog";


const Blog = ({ entradas }) => {
  return (
    <div>
      <Layout pagina="Blog">
        <main className="contenedor">
          <ListadoBlog entradas={entradas}/>
        </main>
      </Layout>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `${process.env.API_URL}/blogs?_sort=created_at:desc`
  );
  const entradas = await response.json();
  return {
    props: { entradas },
  };
}

export default Blog;
