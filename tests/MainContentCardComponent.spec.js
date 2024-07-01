import { shallowMount } from '@vue/test-utils';
import MainContentCardComponent from '@/components/MainContentCardComponent.vue';

describe('MainContentCardComponent.vue', () => {
  let wrapper;
  const animeContent = {
    thumbNailImage: 'https://example.com/image.jpg',
    logo: 'https://example.com/logo.jpg',
    title: 'Anime Title',
    subTitle: 'Anime Subtitle',
  };

  beforeEach(() => {
    wrapper = shallowMount(MainContentCardComponent, {
      propsData: { animeContent },
    });
  });

  it('renders anime content correctly', () => {
    expect(wrapper.find('.main-img').attributes('src')).to.equal(animeContent.thumbNailImage);
    expect(wrapper.find('.logo-img').attributes('src')).to.equal(animeContent.logo);
    expect(wrapper.find('b-card-title').text()).to.equal(animeContent.title);
    expect(wrapper.find('b-card-text').text()).to.equal(animeContent.subTitle);
  });

  it('emits expand event when main image is clicked', () => {
    wrapper.find('.main-img').trigger('click');
    expect(wrapper.emitted().expand).to.be.ok;
  });

  it('emits refresh event when refresh button is clicked', () => {
    wrapper.find('.refresh-button').trigger('click');
    expect(wrapper.emitted().refresh).to.be.ok;
  });
});
