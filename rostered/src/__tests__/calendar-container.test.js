import React, { Component } from 'react';
import CalendarContainer from '../components/calendar/calendar';
import BigCalendar from 'react-big-calendar';
import { MemoryRouter } from 'react-router-dom';
import { fakeUser, fakeEvents } from '../testUtils';
import { configure, shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import datasample from '../datasample';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<CalendarContainer />', () => {
  it('renders', () => {
    mount(
      <MemoryRouter>
        <CalendarContainer user={fakeUser} currentUser={fakeUser} stats={datasample} events={fakeEvents} />
      </MemoryRouter>
    );
  });

  // it('matches the snapshot', () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <CalendarContainer user={fakeUser} currentUser={fakeUser} stats={datasample} events={fakeEvents} />
  //     </MemoryRouter>
  //   );
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  // });

  // it('updates via props', () => {
  //   const wrapper = mount(
  //     <MemoryRouter>
  //       <CalendarContainer user={fakeUser} currentUser={fakeUser} stats={datasample} events={fakeEvents} count={50} />
  //     </MemoryRouter>
  //   );
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  //   wrapper.setProps({ count: 10 });
  //   expect(toJSON(wrapper)).toMatchSnapshot();
  // });
});
