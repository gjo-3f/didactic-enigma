import Layout from "components/Layout";
import ResourceDetail from "components/resources/ResourceDetail";

import axios from "axios";

const Resource = ({ resource }) => {
  const { status } = resource;
  const activateResource = () => {
    if (status !== "inactive") {
      return alert(`cannot activate. status is ${status}`);
    }
    axios
      .patch(`/api/resources`, { ...resource, status: "active" })
      .then(() => location.reload())
      .catch(() => alert("cannot activate the resource"));
  };

  return (
    <Layout>
      <ResourceDetail resource={resource} activateResource={activateResource} />
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const resData = await fetch(`${process.env.API_URL}/resources/${params.id}`);
  const data = await resData.json();
  return {
    props: {
      resource: data,
    },
  };
}

export default Resource;
