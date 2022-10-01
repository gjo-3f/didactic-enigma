import { useState } from "react";

const DEFAULT_DATA = {
  title: "",
  description: "",
  fulltext: "",
  link: "",
  priority: "2",
  timeToFinish: 60,
};

const ResourceForm = (props) => {
  const { type, initialData, onFormSubmit, onFormCancel } = props;
  const [form, setForm] = useState(initialData || DEFAULT_DATA);

  const PRIORITY_VALUES = ["1", "2", "3", "4", "5"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const resetForm = () => {
    setForm(DEFAULT_DATA);
  };

  const cancelForm = () => {
    onFormCancel();
  };

  const submitForm = () => {
    onFormSubmit(form);
  };

  const renderEditButtons = () => {
    return (
      <div className='field is-grouped'>
        <p className='control'>
          <button type='button' className='button is-link' onClick={submitForm}>
            Save changes
          </button>
        </p>
        <p className='control'>
          <button
            type='button'
            className='button is-link is-light'
            onClick={cancelForm}
          >
            Cancel
          </button>
        </p>
        <p className='control'>
          <button className='button is-danger'>Delete post</button>
        </p>
      </div>
    );
  };

  const renderNewButtons = () => {
    return (
      <div className='field is-grouped'>
        <div className='control'>
          <button type='button' onClick={submitForm} className='button is-link'>
            Submit
          </button>
        </div>
        <div className='control'>
          <button
            type='button'
            onClick={resetForm}
            className='button is-link is-light'
          >
            Reset
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className='container'>
      <div className='columns'>
        <div className='column is-8 is-offset-2'>
          <div className='resource-form'>
            <h1 className='title'>{`${type} Resource`}</h1>
            <form>
              {/* TITLE */}
              <div className='field'>
                <label className='label'>Title</label>
                <div className='control'>
                  <input
                    name='title'
                    value={form.title}
                    onChange={handleChange}
                    className='input'
                    type='text'
                    placeholder=''
                  />
                </div>
              </div>

              {/* DESCRIPTION */}
              <div className='field'>
                <label className='label'>Description</label>
                <div className='control'>
                  <input
                    name='description'
                    value={form.description}
                    onChange={handleChange}
                    className='textarea'
                    type='text'
                    placeholder=''
                  />
                </div>
              </div>

              {/* LINK */}
              <div className='field'>
                <label className='label'>Link</label>
                <div className='control'>
                  <input
                    name='link'
                    value={form.link}
                    onChange={handleChange}
                    className='input'
                    type='text'
                    placeholder=''
                  />
                </div>
              </div>

              {/* PRIORITY */}
              <div className='field'>
                <label className='label'>Priority</label>
                <div className='control'>
                  <div className='select'>
                    <select
                      name='priority'
                      value={form.priority}
                      onChange={handleChange}
                    >
                      {PRIORITY_VALUES.map((item) => {
                        return <option key={item}>{item}</option>;
                      })}
                    </select>
                  </div>
                </div>
              </div>

              {/* TIME TO FINISH */}
              <div className='field'>
                <label className='label'>Time to Finish</label>
                <div className='control'>
                  <input
                    name='timeToFinish'
                    value={form.timeToFinish}
                    onChange={handleChange}
                    className='input'
                    type='number'
                    placeholder=''
                  />
                  <p className='help'>Time is in minutes</p>
                </div>
                <div className='button-set mt-4'>
                  {type === "New" ? renderNewButtons() : renderEditButtons()}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResourceForm;
