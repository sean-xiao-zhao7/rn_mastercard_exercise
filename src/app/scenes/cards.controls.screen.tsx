import React, {FC, Fragment} from 'react';
import {StatusBar, Text, View} from 'react-native';

import {StackScreenProps} from '@react-navigation/stack';
import {useTheme} from 'styled-components/native';
import {CardsRoutes} from './cards.stack';

type ScreenProps = StackScreenProps<CardsRoutes, 'Cards'>;

const CardsControlsScreen: FC<ScreenProps> = ({navigation}) => {
  const theme = useTheme();

  return (
    <Fragment>
      <StatusBar
        animated={true}
        translucent={true}
        showHideTransition="fade"
        barStyle="dark-content"
        backgroundColor="transparent"
      />
    </Fragment>
  );
};

export default CardsControlsScreen;
