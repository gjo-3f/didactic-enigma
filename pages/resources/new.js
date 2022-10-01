import Layout from "components/Layout";
import ResourceForm from "components/resources/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceCreate = () => {
  const router = useRouter();
  const createResource = (formData) => {
    axios
      .post("/api/resources", formData)
      .then((res) => router.push("/"))
      .catch((err) => {
        alert(err?.response?.data);
      });
  };

  return (
    <Layout>
      <ResourceForm type='New' onFormCancel={null} onFormSubmit={createResource} />
    </Layout>
  );
};

export default ResourceCreate;
