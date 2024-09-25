import React from 'react';
import { Document, Page, Text, View, StyleSheet, Image, pdf } from '@react-pdf/renderer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

const Form=()=>{

const handlesubmit = async ()=>{

  const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
}

  return (
    <>
    <div class="content">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-10">
          
          <div class="row align-items-center">
            <div class="col-lg-7 mb-5 mb-lg-0">

              <h2 class="mb-5">Fill the form. <br /> It's easy.</h2>

              <div className='border-right pr-5 mb-5'>
                <div class="row">
                
                    <div className='row'>
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="fname" id="fname" placeholder="First name" />
                  </div>
                  <div class="col-md-6 form-group">
                    <input type="text" class="form-control" name="lname" id="lname" placeholder="Last name" />
                  </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12 form-group">
                    <input type="text" class="form-control" name="email" id="email" placeholder="Email" />
                  </div>
                </div>

                <div class="row">
                  <div class="col-md-12 form-group">
                    <textarea class="form-control" name="message" id="message" cols="30" rows="7" placeholder="Write your message"></textarea>
                  </div>
                </div>
                <div class="row">
                  <div class="col-md-12">
                    <button class="btn btn-primary rounded-0 py-2 px-4" onClick={handlesubmit}>Send Message</button>
                    <span class="submitting"></span>
                  </div>
                </div>


              <div id="form-message-warning mt-4"></div> 
             

            </div>
            </div>
            <div class="col-lg-4 ml-auto">
              <h3 class="mb-4">Let's talk about everything.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil deleniti itaque similique magni. Magni, laboriosam perferendis maxime!</p>
            
            </div>
          </div>
        </div>  
        </div>
      </div>
  </div>
    </>
  )
}

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>
      <Text style={styles.title}>Don Quijote de la Mancha</Text>
      <Text style={styles.author}>Miguel de Cervantes</Text>
      <Image style={styles.image} src="data:image/jpeg;base64,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" />
      <Text style={styles.text}>Your text goes here...</Text>
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
});

const App = () => {

  return (
    <div>
      <Form />
    </div>
  );
};

export default App;
