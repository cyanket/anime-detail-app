import { shallowMount } from '@vue/test-utils';
import ExpandedViewComponent from '@/components/ExpandedViewComponent.vue';

describe('ExpandedViewComponent.vue', () => {
  let wrapper;
  const animeContent = {
    mainImage: 'https://example.com/main-image.jpg',
    logo: 'https://example.com/logo.jpg',
    title: 'Anime Title',
    subTitle: 'Anime Subtitle',
    text: '<p>Anime Description</p>',
  };

  beforeEach(() => {
    wrapper = shallowMount(ExpandedViewComponent, {
      propsData: { animeContent, isExpanded: true },
    });
  });

  it('renders expanded anime content correctly', () => {
    expect(wrapper.find('.expanded-img').attributes('src')).toBe(animeContent.mainImage);
    expect(wrapper.find('.logo-img').attributes('src')).toBe(animeContent.logo);
    expect(wrapper.find('.anime-content-title').text()).toBe(animeContent.title);
    expect(wrapper.find('.anime-subtitle').text()).toBe(animeContent.subTitle);
    expect(wrapper.find('.mx-3').html()).toContain(animeContent.text);
  });

  it('emits close event when close button is clicked', () => {
    wrapper.find('.x-btn').trigger('click');
    expect(wrapper.emitted().close).toBeTruthy();
  });

  it('emits refresh event when refresh button is clicked', () => {
    wrapper.find('.refresh-content-btn').trigger('click');
    expect(wrapper.emitted().refresh).toBeTruthy();
  });

  it('toggles share options when share button is clicked', async () => {
    expect(wrapper.vm.showShareOptions).toBe(false);
    await wrapper.find('.share-story-btn').trigger('click');
    expect(wrapper.vm.showShareOptions).toBe(true);
  });
});
