import React, { Component } from 'react';
import UserProfile from '../components/user/profile';
import { MemoryRouter } from 'react-router-dom';
import { fakeUser } from '../testUtils';
import { configure, shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import datasample from '../datasample';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<UserProfile />', () => {
  it('renders', () => {
    mount(
      <MemoryRouter>
        <UserProfile currentUser={fakeUser} stats={datasample} />
      </MemoryRouter>
    );
  });

  it('matches the snapshot', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserProfile currentUser={fakeUser} stats={datasample} />
      </MemoryRouter>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('updates via props', () => {
    const wrapper = mount(
      <MemoryRouter>
        <UserProfile currentUser={fakeUser} stats={datasample} count={50} />
      </MemoryRouter>
    );
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
