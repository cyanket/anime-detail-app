import { shallowMount, createLocalVue } from '@vue/test-utils';
import Vuex from 'vuex';
import App from '../src/App.vue';
import MainContentCardComponent from '@/components/MainContentCardComponent.vue';
import ExpandedViewComponent from '@/components/ExpandedViewComponent.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('App.vue', () => {
  let actions;
  let state;
  let store;

  beforeEach(() => {
    state = {
      animeContent: {
        thumbNailImage: 'https://example.com/image.jpg',
        logo: 'https://example.com/logo.jpg',
        title: 'Anime Title',
        subTitle: 'Anime Subtitle',
        mainImage: 'https://example.com/main-image.jpg',
        text: '<p>Anime Description</p>'
      }
    };

    actions = {
      getToken: jest.fn(),
      getAnimeContent: jest.fn()
    };

    store = new Vuex.Store({
      state,
      actions
    });
  });

  it('renders current date correctly', () => {
    const wrapper = shallowMount(App, { store, localVue });
    const date = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    const expectedDate = date.toLocaleDateString('en-GB', options).toUpperCase();
    expect(wrapper.find('.current-date').text()).toBe(expectedDate);
  });

  it('renders MainContentCardComponent when animeContent is available', () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.findComponent(MainContentCardComponent).exists()).toBe(true);
  });

  it('does not render MainContentCardComponent when animeContent is not available', () => {
    state.animeContent = null;
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.findComponent(MainContentCardComponent).exists()).toBe(false);
  });

  it('renders ExpandedViewComponent when animeContent is available', () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.findComponent(ExpandedViewComponent).exists()).toBe(true);
  });

  it('expands and closes the view correctly', async () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.vm.isExpanded).toBe(false);
    wrapper.vm.expandView();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isExpanded).toBe(true);
    wrapper.vm.closeView();
    await wrapper.vm.$nextTick();
    expect(wrapper.vm.isExpanded).toBe(false);
  });

  it('calls fetchNewContent method on component creation', () => {
    shallowMount(App, { store, localVue });
    expect(actions.getToken).toHaveBeenCalled();
    expect(actions.getAnimeContent).toHaveBeenCalled();
  });
});