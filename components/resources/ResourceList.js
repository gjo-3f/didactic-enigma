import Link from "next/link";
import ResourceLabel from "./ResourceLabel";
import moment from "moment";

const ResourceList = ({ resources }) => {
  const renderResources = () =>
    resources.map((resource) => {
      return (
        <div key={resource.id} className='column is-5 is-offset-1'>
          <Link href={`/resources/${resource.id}`}>
            <a>
              <div className='content-is-medium'>
                <h2 className='subtitle is- has-text-grey'>
                  {moment(resource.createdAt).format("LLL")}
                  <ResourceLabel status={resource.status} />
                </h2>
                <h1 className='title has-text-black is-4'>{resource.title}</h1>
                {/* <p className='has-text-dark'>{resource.description}</p> */}
              </div>
            </a>
          </Link>
        </div>
      );
    });
  return (
    <section className='hero '>
      <div className='hero-body'>
        <div className='container'></div>
        <section className='section'>
          <div className='columns is-multiline is-variable is-8'>
            {renderResources()}
          </div>
        </section>
      </div>
    </section>
  );
};

export default ResourceList;
