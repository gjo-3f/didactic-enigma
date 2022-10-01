import Link from "next/link";
import ResourceLabel from "./ResourceLabel";
import moment from "moment";

const ResourceHighlight = ({ resources }) => {
  const renderHighlight = () =>
    resources.map((resource) => {
      return (
        <section key={resource.id} className='section'>
          <div className='columns'>
            <div className='column is-8 is-offset-2'>
              <Link href={`/resources/${resource.id}`}>
                <div className='content is-medium'>
                  <a>
                    <h2 className='subtitle is-4'>
                      {moment(resource.createdAt).format("LLL")}
                      <ResourceLabel status={resource.status}/>
                    </h2>
                    <h1 className='title'>{resource.title}</h1>

                    <p>{resource.description}</p>
                  </a>
                </div>
              </Link>
            </div>
          </div>
        </section>
      );
    });

  return (
    <section className='hero '>
      <div className='hero-body'>
        <div className='container'></div>
        {renderHighlight()}
      </div>
    </section>
  );
};

export default ResourceHighlight;
