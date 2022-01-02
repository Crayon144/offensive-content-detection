import { useState } from 'react';
import { Navbar , Container , Nav , Form , Button , Collapse, Card , Row , Col } from 'react-bootstrap';

function App() {
    const [ openUrl , setOpenUrl ] = useState(false);
    const [ openImage , setOpenImage ] = useState(false);
    const [ tweetUrl , setTweetUrl ] = useState('');

    const onUrlSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8080/scrapeURL', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                url: tweetUrl
            }),
        });
        const data = await response.json();
        console.log(data);
        setTweetUrl('');
    }

    const onImageSubmit = (e) => {
        e.preventDefault();
        console.log('submiiting url');
    }

    return (
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">offensive-content-detection</Navbar.Brand>
            </Container>
        </Navbar>
        <Container className='mt-5 w-50'>
            <Card className='shadow'>
                <Card.Header className='d-flex justify-content-center'>
                        <Button
                            className='w-25 mx-2 my-2'
                            onClick={() => {
                                if(openUrl){
                                    setOpenUrl(false)
                                }else{
                                    setOpenUrl(true)
                                    setOpenImage(false)
                                }
                            }}
                            aria-controls="url-collapse"
                            aria-expanded={openUrl}
                        >
                            URL
                        </Button>
                        <Button
                            className='w-25 mx-2 my-2'
                            onClick={() => {
                                if(openImage){
                                    setOpenImage(false)
                                }else{
                                    setOpenUrl(false)
                                    setOpenImage(true)
                                }
                            }}
                            aria-controls="image-collapse"
                            aria-expanded={openImage}
                        >
                        Upload Image
                        </Button>
                </Card.Header>
                <div>
                    <Collapse in={openUrl}>
                        <div id="url-collapse">
                        <Form onSubmit={onUrlSubmit}>
                            <Form.Group className="m-3">
                                <Form.Label>Enter URL of the Hashtag on Twitter to be Checked</Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Enter URL"
                                    value = {tweetUrl}
                                    onChange={e => setTweetUrl(e.target.value)}
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit" className='mb-3 mx-3'>
                                Submit
                            </Button>
                        </Form>
                        </div>
                    </Collapse>
                    <Collapse in={openImage}>
                        <div id="image-collapse">
                            <Form onSubmit={onImageSubmit}>
                                <Form.Group className="m-3" onSubmit={onImageSubmit}>
                                    <Form.Label>Upload the Image file to be checked</Form.Label>
                                    <Form.Control type="file" />
                                </Form.Group>
                                <Button variant="primary" type="submit" className='mb-3 mx-3'>
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Collapse>
                </div>

            </Card>
        </Container>
    </>
    );
}

export default App;
