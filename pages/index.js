import Layout from "components/Layout";
import ResourceHighlight from "components/resources/ResourceHighlight";
import Newsletter from "components/Newsletter";
import ResourceList from "components/resources/ResourceList";

function Home({ resources }) {
  return (
    <>
      <Layout>
        <ResourceHighlight resources={resources.slice(0, 2)} />
        <Newsletter />
        <ResourceList resources={resources.slice(2)} />
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
