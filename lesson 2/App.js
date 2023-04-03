import React, { useState } from 'react';
import { View, TextInput, Button, Image, TouchableOpacity, FlatList, StyleSheet, Text } from 'react-native';

const App = () => {
  const [galleryItems, setGalleryItems] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [title, setTitle] = useState('');

  const handleAddItem = () => {
    setGalleryItems([...galleryItems, { id: galleryItems.length, imageUrl: imageUrl, title: title }]);
    setImageUrl('');
    setTitle('');
  };

  const handleRemoveItem = (id) => {
    setGalleryItems(galleryItems.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image style={styles.image} source={{ uri: item.imageUrl }} />
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleRemoveItem(item.id)}>
        <Image style={styles.deleteIcon} source={require('./assets/delete.png')} />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.headerImage} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter image URL"
            value={imageUrl}
            onChangeText={text => setImageUrl(text)}
          />
          <TextInput
            style={styles.input}
            placeholder="Enter title"
            value={title}
            onChangeText={text => setTitle(text)}
          />
          <Button title="Add" onPress={handleAddItem} />
        </View>
      </View>
      <FlatList
        data={galleryItems}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 150,
  },
  inputContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  input: {
    flex: 1,
    marginRight: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#fff',
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
  },
  item: {
    flex: 1,
    margin: 5,
    borderRadius: 5,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
  },
  image: {
    width: '100%',
    height: 150,
  },
  deleteButton: {
    position: 'absolute',
    top: 150,
    right: -6,
    padding: 5,
    borderRadius: 50,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
  titleContainer: {
  paddingHorizontal: 10,
  paddingVertical: 5,
},
  title: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#333',
},
});

export default App;