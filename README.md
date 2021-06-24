# react-native-vertical-swipe-view

## Getting started
```js
    npm install react-native-vertical-swipe-view --save
```
or
```js
    yarn add react-native-vertical-swipe-view
```

### Demo
![](https://github.com/hoaphantn7604/file-upload/blob/master/document/swipeview/demo.png)

#### Props
| Props              | Params               | isRequire | Description      |
| ------------------ | -------------------- | --------- | ---------------- |
| style              | ViewStyle            | No        |                  |
| headerStyle        | ViewStyle            | No        |                  |
| backgroundColor    | String               | No        |                  |
| maxHeight          | Number               | Yes       |                  |
| autoShow           | Boolean              | No        |                  |
| position           | 'top' or 'bottom'    | No        |                  |
| renderHeader       | () => JSX.Element    | No        |                  |
| onShow             | (status)=> void      | No        |                  |


## Usage
```javascript
    import React from 'react';
    import {StyleSheet, View, SafeAreaView} from 'react-native';
    import SwipeView from 'react-native-vertical-swipe-view';

    const SwipeViewScreen = _props => {
        const _renderHeaderTop = () => {
            return (
            <View style={styles.headerTop}>
                <View style={styles.lineTop} />
            </View>
            );
        };

        const _renderHeaderBottom = () => {
            return (
            <View style={styles.headerBottom}>
                <View style={styles.lineBottom} />
            </View>
            );
        };

        return (
            <SafeAreaView style={styles.container}>
                <SwipeView
                    position="top"
                    style={styles.curtainView}
                    maxHeight={300}
                    headerStyle={{backgroundColor: 'transparent'}}
                    renderHeader={_renderHeaderTop}>
                    <View style={styles.curtainContainer} />
                </SwipeView>

                <View style={{flex: 1}} />

                <SwipeView
                    position="bottom"
                    style={styles.curtainView}
                    maxHeight={200}
                    headerStyle={{backgroundColor: 'transparent'}}
                    renderHeader={_renderHeaderBottom}>
                    <View style={styles.curtainContainer} />
                </SwipeView>
            </SafeAreaView>
        );
    };

    export default SwipeViewScreen;

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },
        curtainView: {
            width: '100%',
        },
        curtainContainer: {
            flex: 1,
            backgroundColor: 'gray',
        },
        row: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
        },
        headerTop: {
            flex: 1,
            backgroundColor: 'transparent',
            justifyContent: 'center',
            alignItems: 'center',
        },
        headerBottom: {
            flex: 1,
            backgroundColor: 'black',
            borderTopLeftRadius: 22,
            borderTopRightRadius: 22,
            justifyContent: 'center',
            alignItems: 'center',
        },
        lineTop: {
            width: 40,
            height: 6,
            backgroundColor: 'gray',
        },
        lineBottom: {
            width: 40,
            height: 6,
            backgroundColor: 'white',
        },
    });
```
