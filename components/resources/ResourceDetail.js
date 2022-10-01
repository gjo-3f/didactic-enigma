import ResourceLabel from "./ResourceLabel";
import Link from "next/link";
import moment from "moment";

const ResourceDetail = (props) => {
  const { resource, activateResource } = props;
  const { id, title, description, status, timeToFinish } = resource;
  return (
    <section className='section'>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <div className='content is-medium'>
            <h2 className='subtitle is-4'>
              {moment(resource.createdAt).format("LLL")}
              <ResourceLabel status={resource.status} />
            </h2>
            <h1 className='title'>{title}</h1>
            <p className=''>{description}</p>
            <p className=''>Time to finish: {timeToFinish} minutes</p>
            <p className=''>Status: {status}</p>
            <div className='field is-grouped'>
              <Link href={`/resources/${id}/edit`}>
                <a className='button is-warning'>Edit</a>
              </Link>

              {status === "inactive" ? (
                <button
                  className='button is-success ml-2'
                  onClick={activateResource}
                >
                  Activate
                </button>
              ) : (
                <button className='button is-success ml-2' disabled>
                  Pause
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceDetail;
