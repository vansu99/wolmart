import Login from '@/pages/Login/index';
import flushPromises from 'flush-promises';
import { shallowMount, RouterLinkStub } from '@vue/test-utils';
import wrapperOps from '../../../../test/wrapper';
import Button from '@/components/Button/ButtonPrimary';
import { ValidationProvider, ValidationObserver } from 'vee-validate';


//jest.mock('axios')

const userTokenMock = {
  id: 1,
  name: 'evan',
  email: 'evan@gmail.com',
  token: '2lsaW5nLWJyb29rLTg4Mzg2Lmhlcm9rdWFwcC5jb21cL2FwaVwvbG9naW4iLCJpYXQiOjE2ND',
};

const userDataMock = {
  id: 1,
  name: 'evan',
  email: 'evan@gmail.com',
}

const $route = {
  path: '/',
};

describe('Login.vue', () => {
  let wrapper;
  let actions;

  beforeEach(() => {
    actions = {
      dispatch: jest.fn(),
    };
    wrapper = shallowMount(Login, {
      ...wrapperOps,
      stubs: {
        Button,
        ValidationObserver,
        ValidationProvider,
        RouterLink: RouterLinkStub,
      },
      mocks: {
        $route,
        $store: actions
      },
    });
  });

  afterEach(() => {
    wrapper.vm.$destroy();
  });

  describe('#mounted', () => {
    it('should render component', () => {
      expect(wrapper.exists()).toBe(true);
      expect(wrapper.vm).toBeTruthy();

      // check components

      // check snapshot
      expect(wrapper.html()).toMatchSnapshot();
    });
  });

  describe('#check validate for fields', () => {
    it('should show error when email is empty', async () => {
      await wrapper.find('#email').setValue('');
      await wrapper.find('#password').setValue('123456');

      const { formData } = wrapper.vm;
      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.find('.form-error').text();
      expect(formData.email).toEqual('');
      expect(formData.password).toEqual('123456');
      expect(errorMessage).toContain('The Email field is required');
    });

    it('should show error when email is invalid', async () => {
      await wrapper.find('#email').setValue('test');
      await wrapper.find('#password').setValue('123456789');

      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.find('.form-error').text();
      expect(errorMessage).toContain('The Email field must be a valid email');
    });

    it('should not error when email is valid', async () => {
      await wrapper.find('#email').setValue('test@gmail.com');
      await wrapper.find('#password').setValue('1234567');

      const { formData } = wrapper.vm;
      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.find('.form-error').text();

      expect(formData.email).toEqual('test@gmail.com');
      expect(errorMessage).toContain('');
    });

    it('should show error when password is empty', async () => {
      await wrapper.find('#email').setValue('test@gmail.com');
      await wrapper.find('#password').setValue('');

      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.vm.$refs.provider.errors[0];
      expect(errorMessage).toContain('The Password field is required');
    });

    it('should show error when password invalid', async () => {
      await wrapper.find('#email').setValue('test@gmail.com');
      await wrapper.find('#password').setValue('1234');

      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.vm.$refs.provider.errors[0];
      expect(errorMessage).toContain('The Password field must be at least 6 characters');
    });

    it('should show error when password greater than 32 characters', async () => {
      await wrapper.find('#email').setValue('test@gmail.com');
      await wrapper
        .find('#password')
        .setValue('123456789123456789123456789123456789123456789123456789');

      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      const errorMessage = wrapper.vm.$refs.provider.errors[0];
      expect(errorMessage).toContain(
        'The Password field may not be greater than 32 characters'
      );
    });
  });

  describe('#click button submit', () => {
    it('should call submit method and redirect home page', async () => {
      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      expect(wrapper.vm.$route.path).toBe('/');
    });

    it('should dispatches an action when form is submitted', async () => {
      await wrapper.find('form').trigger('submit.prevent');
      await flushPromises();

      expect(actions.dispatch).toHaveBeenCalledWith("auth/login", userDataMock);
      expect(actions.dispatch).toHaveBeenCalledTimes(1)
    });
  });
});
