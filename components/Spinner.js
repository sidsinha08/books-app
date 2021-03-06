import React from 'react';
import {View , ActivityIndicator} from 'react-native';

const Spinner = ({size}) => {
    return (
        <View>
            <ActivityIndicator size= {size || 'large'} />
        </View>
    );
}

const styles={
    SpinnerStyle :{
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
}

export default Spinner;