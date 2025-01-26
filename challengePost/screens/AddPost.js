import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const AddPost = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [response1, setResponse] = useState(null);

  const makePostRequest = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: title,
          body: body,
          userId: 1,
        }),
      });
      const data = await response.json();
      setResponse(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create a Post</Text>
      <TextInput
        value={title}
        onChangeText={text => setTitle(text)}
        placeholder="Enter Title"
        style={styles.input}
      />
      <TextInput
        value={body}
        onChangeText={text => setBody(text)}
        placeholder="Enter Body"
        multiline
        style={[styles.input, styles.textArea]}
      />
      <Button title="Send Post Request" onPress={makePostRequest} />
      {response1 && (
        <Text style={styles.response}>Response: {JSON.stringify(response1, null, 2)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 8,
    marginBottom: 16,
    borderRadius: 4,
  },
  textArea: {
    height: 100,
  },
  response: {
    marginTop: 16,
    fontSize: 16,
  },
});

export default AddPost;