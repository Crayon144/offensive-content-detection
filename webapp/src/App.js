import { useState } from 'react';
import { Navbar , Container , Nav , Form , Button , Collapse, Card , Row , Col } from 'react-bootstrap';

function App() {
    const [ openUrl , setOpenUrl ] = useState(false);
    const [ openImage , setOpenImage ] = useState(false);
    const [ tweetUrl , setTweetUrl ] = useState('');
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
                        <Form.Group className="m-3">
                            <Form.Label>Enter URL of the Tweet to be Checked</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter URL"
                                value = {tweetUrl}
                                onChange={e => setTweetUrl(e.target.value)}
                            />
                        </Form.Group>
                        </div>
                    </Collapse>
                    <Collapse in={openImage}>
                        <div id="image-collapse">
                            <Form.Group className="m-3">
                                <Form.Label>Upload the Image file to be checked</Form.Label>
                                <Form.Control type="file" />
                            </Form.Group>
                        </div>
                    </Collapse>
                </div>

            </Card>
        </Container>
    </>
    );
}

export default App;
