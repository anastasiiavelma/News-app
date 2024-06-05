import axios from 'axios';
import React from 'react';
import {
  Alert,
  Text,
  StyleSheet,
  View,
  Image, 
} from 'react-native';
import { Post } from '../components/post';
import { Loading } from '../components/Loading';

export const FullPost = ({ route, navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [data, setData] = React.useState();
  const { id, title, imageUrl } = route.params;



  React.useEffect(() => {
    navigation.setOptions({
      title,
      imageUrl,
    });
    axios
      .get('https://665dccb5e88051d6040863d6.mockapi.io/articles/' + id)
      .then(({ data }) => {
        setData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert('Error', 'Smth went wrong');
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Loading />
      </View>
    );
  }

  const styles = StyleSheet.create({
    postImage: {
      borderRadius: 10,
      width: '100%',
      height: 250,
      marginBottom: 20,
    },
    postText: {
        textAlign: 'justify',
      fontSize: 18,
      lineHeight: 24,
    },
  });


    return (
      <View style={{ padding: 20 }}>
        <Image source={{ uri: data.imageUrl }} style={styles.postImage} />
        <Text style={styles.postText}>{data.text}</Text>
      </View>
    );
  
};