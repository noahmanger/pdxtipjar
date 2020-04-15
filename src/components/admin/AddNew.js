import React, { useState } from 'react';

import { useInput} from './InputHook';
import addOrUpdateWorkers from '../../effects/addUpdateWorkers';

const styles = {
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px',
  },
  label: {
    marginBottom: '5px',
  },
  radioButton: {
    margin: '5px',
  },
  radioInput: {
    marginRight: '5px',
  },
};

const requiredKeys = [
  'name',
  'work',
  'app',
  'role',
  'handle',
];

const validatePayload = (payload) => {
  const result = requiredKeys.map((key) => {
    const isPresent = Object.keys(payload).includes(key);
    const hasValue = !!payload[key];

    return isPresent && hasValue;
  });

  return !result.includes(false);
};

const initialValues = {
  app: '',
  support_others: '',
  healthcare: '',
  name: '',
  work: '',
  role: '',
  handle: '',
};

const AddNew = ({
  title = '',
  update = false,
  defaultValues = initialValues,
  callback = () => {},
  token,
}) => {
  const [app, setApp] = useState(defaultValues.app);
  const [support_others, setSupportOthers] = useState(defaultValues.support_others);
  const [healthcare, setHealthcare] = useState(defaultValues.healthcare);
  const { value: name, bind: bindName, reset: resetName } = useInput(defaultValues.name);
  const { value: work, bind: bindWork, reset:resetWork } = useInput(defaultValues.work);
  const { value: role, bind: bindRole, reset:resetRole } = useInput(defaultValues.role);
  const { value: handle, bind: bindHandle, reset:resetHandle } = useInput(defaultValues.handle);


  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const obj = {
        name,
        work,
        role,
        handle,
        app,
        healthcare,
        support_others,
      };

      if (update) {
        obj.user_id = defaultValues.user_id;
      }

      const isValid = validatePayload(obj);

      if (!isValid) {
        return window.alert(`${requiredKeys.join(', ')} are all required.`);
      }

      // remove empty values
      const body = Object.keys(obj).reduce((memo, key) => {
        if (obj[key] !== '') {
          memo[key] = obj[key];
        }

        return memo;
      }, {});

      const { success } = await addOrUpdateWorkers({ token, update, worker: body });

      if (!success) {
        throw new Error('Something went wrong.');
      }

      resetHandle();
      resetWork();
      resetRole();
      resetName();
      setApp('')
      setSupportOthers('');
      setHealthcare('');

      if (callback) {
        callback();
      }

    } catch (error) {
      // no-op
    }
  };

  return (
    <fieldset>
      <legend>{title}</legend>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            What's your name?
          </label>
          <input
            name="name"
            type="text"
            {...bindName}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Where do you work?
          </label>
          <input
              name="work"
              type="text"
              {...bindWork}
            />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            What do you do there?
          </label>
          <input
            name="role"
            type="text"
            {...bindRole}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            What's the best way to tip you?
          </label>
          <select value={app} onChange={(e) => setApp(e.target.value)}>
            <option value="">Choose</option>
            <option value="Cashapp">Cash App</option>
            <option value="Venmo">Venmo</option>
            <option value="Paypal">Paypal</option>
          </select>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            What's your handle?
          </label>
          <input
            name="handle"
            type="text"
            {...bindHandle}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Do you financially support others?
          </label>
          <div>
            <div style={styles.radioButton}>
              <input
                type="radio"
                name="support_others"
                value="Yes"
                checked={support_others === 'Yes'}
                onChange={() => setSupportOthers('Yes')}
                style={styles.radioInput}
              />
              <span>Yes</span>
            </div>
            <div style={styles.radioButton}>
              <input
                type="radio"
                name="support_others"
                value="No"
                checked={support_others === 'No'}
                onChange={() => setSupportOthers('No')}
                style={styles.radioInput}
              />
              <span>No</span>
            </div>
          </div>
        </div>
        <div style={styles.inputGroup}>
          <label>
            Do you have healthcare?
          </label>
          <div>
            <div style={styles.radioButton}>
              <input
                type="radio"
                name="healthcare"
                value="Yes"
                checked={healthcare === 'Yes'}
                onChange={() => setHealthcare('Yes')}
                style={styles.radioInput}
              />
              <span>Yes</span>
            </div>
            <div style={styles.radioButton}>
              <input
                type="radio"
                name="healthcare"
                value="No"
                checked={healthcare === 'No'}
                onChange={() => setHealthcare('No')}
                style={styles.radioInput}
              />
              <span>No</span>
            </div>
          </div>
        </div>
        <div style={styles.inputGroup}>
          <input type="submit" value="Submit" />
        </div>
      </form>
    </fieldset>
  );
};

export default AddNew;