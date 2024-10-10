// PdfPreview.js
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import Pdf from 'react-native-pdf';

const PdfViewer = ({ route }) => {
  const { pdfUrl } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <Pdf
        source={{ uri: pdfUrl, cache: true }}
        style={styles.pdf}
        onError={(error) => {
          console.error(error);
        }}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pdf: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default PdfViewer;
