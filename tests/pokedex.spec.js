import { mount } from 'vue-test-utils';
import Pokedex from '../src/Components/Pokedex.vue';
import expect from 'expect';
import moxios from 'moxios';

describe('Testando Pokedex', () => {
    let poke;

    beforeEach(() => {
        moxios.install();
        poke = mount(Pokedex);
    })

    afterEach(() => {
        moxios.uninstall();
        poke = mount(Pokedex);
    })

    it('Teste de exibição inicial', () => {
        expect(poke.find('.list').html()).toContain('Nenhum item a exibir');
    });

    it('Teste de listagem', (done) => {

        moxios.stubRequest(/poke\/.+/, {
            status: 200,
            response: {
                pokes: [
                    {name: 'poke 1'},
                    {name: 'poke 2'},
                    {name: 'poke 3'},
                    {name: 'poke 4'}
                ]
            }
        });

        poke.find('a').trigger('click');

        moxios.wait(() => {
            expect(poke.find('table.poke-list').html()).toContain('poke 1');
            expect(poke.find('#wrapper').html()).not.toContain('Nenhum item a exibir');

            done();
        })
    });
})
