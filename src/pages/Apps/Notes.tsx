import { Fragment } from 'react';
import { Tab } from '@headlessui/react';

const Notes = () => {
  return (
    <div className="p-5">
      <Tab.Group>
        <Tab.List className="flex gap-4">
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Home
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Profile
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Contact
              </button>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              <button
                className={`py-2 px-4 rounded ${selected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'} focus:outline-none`}
              >
                Contact
              </button>
            )}
          </Tab>
        </Tab.List>

        <Tab.Panels>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">Home Content</div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">Profile Content</div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">Contact Content</div>
          </Tab.Panel>
          <Tab.Panel>
            <div className="p-4 bg-gray-100 rounded">khbhbh Content</div>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default Notes;
