import { mount } from 'vue-test-utils';
import Counter from '../src/Components/Counter';
import expect from 'expect';

describe('Testando Contador', () => {

    let counter

    beforeEach(() => {
        counter = mount(Counter)
    });

    it('valor inicial do contador', () => {
        expect(counter.vm.count).toBe(0);
    });

    it('valor após clicar no botão de incremento de contagem', () => {
        counter.find('button.increment').trigger('click');
        expect(counter.vm.count).toBe(1);
    });

    it('valor após clicar no botão de decremento de contagem', () => {
        counter.find('button.increment').trigger('click');
        counter.find('button.increment').trigger('click');
        counter.find('button.increment').trigger('click');

        counter.find('button.decrement').trigger('click');

        expect(counter.vm.count).toBe(2);
    });
});
