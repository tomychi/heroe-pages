import { AppRouter } from "../../routers/AppRouter";
import { mount } from 'enzyme';
import { AuthContext } from "../../auth/authContext";

describe('Pruebas en <AppRouter />', () => {

    const contextValue = {
        user: {
            logged: false
        }
    }

    test('debe de mostarar login si no esta autenticado', () => {
        // es el authcontext
        const wrapper = mount(
            <AuthContext.Provider value={contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('h1').text().trim()).toBe('Login');
    });


    test('debe de mostarar el componente de Marvel si esta autenticado', () => {
        // es el authcontext
            const contextValue = {
        user: {
            logged: true,
            name: 'Pepe'
        }
    }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue} >
                <AppRouter />
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('.navbar').exists() ).toBe(true);
    });

})