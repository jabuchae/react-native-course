import { Platform } from 'react-native';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';

export default {
    stackDefaultOptions: {
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        },
        headerTitleStyle: {
            fontFamily: Fonts.bold,
        },
        headerBackTitleStyle: {
            fontFamily: Fonts.regular,
        },
        headerTintColor: Platform.OS === 'android' ? Colors.primaryContrast : Colors.primary,
        labelStyle: {
            fontFamily: Fonts.regular
        }
    }
}