import Layout from "components/Layout";
import ResourceForm from "components/resources/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceEdit = ({ resource }) => {
  const router = useRouter();

  const cancelForm = () => {
    router.push(`/resources/${resource.id}`);
  };

  const updateResource = (formData) => {
    axios
      .patch("/api/resources", formData)
      .then((res) => router.push(`/resources/${resource.id}`))
      .catch((err) => {
        alert(err?.response?.data);
      });
  };

  const deleteResource = () => {
    axios.post;
  };

  return (
    <Layout>
      <ResourceForm
        type='Edit'
        initialData={resource}
        onFormSubmit={updateResource}
        onFormCancel={cancelForm}
      />
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
export default ResourceEdit;
