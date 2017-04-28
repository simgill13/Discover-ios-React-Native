import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body } from 'native-base';
const cards = [
    {
        text: 'Medical Science',
        name: 'General Practiner',
        image: require('../images/f.png'),
    },
    
];
export default class CardImageExample extends Component {
  render() {
        return (
          <View style={styles.mainContainer}>
            <Container>
                <View>
                    <DeckSwiper
                        dataSource={cards}
                        renderItem={item =>
                            <Card style={{ elevation: 3 }}>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={item.image} />
                                        <Body>
                                            <Text>{item.text}</Text>
                                            <Text note>NativeBase</Text>

                                        </Body>
                                    </Left>
                                </CardItem>
                                <CardItem cardBody>
                                    <Image style={{ resizeMode: 'cover', width: null }} source={item.image} />
                                      <Image source={require('../images/medical-sciences.jpg')}/>
                                </CardItem>
                                <CardItem>
                                    <Icon name="heart" style={{ color: '#ED4A6A' }} />
                                    <Text>{item.name}</Text>
                                </CardItem>
                            </Card>
                        }
                    />
                </View>
            </Container>
                  </View>

        );
    }
}

