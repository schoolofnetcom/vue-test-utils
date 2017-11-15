import { mount } from 'vue-test-utils';
import SayHello from '../src/Components/SayHello';
import expect from 'expect';

describe('Testando SayHello', () => {
    let sayHello;

    beforeEach(() => {
        sayHello = mount(SayHello);
    });

    it('Testando mensagem inicial', () => {
        expect(sayHello.find('h1').html()).toContain('Hello World, <strong>Erik</strong>');
    });

    it('Testando nome alterado via form', () => {
        sayHello.setData({ newName: 'Foo' });

        sayHello.find('form').trigger('submit');
        expect(sayHello.find('h1').html()).toContain('Foo');
    });

});
