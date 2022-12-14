import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export class Gridcards extends React.Component {

	render() {
		return (<Row xs={1} md={2} lg={4} className="g-4">
			{Array.from({ length: 4 }).map((_, idx) => (
				<Col key={idx}>
					<Card style={{ width: '18rem' }}>
						<Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
						<Card.Body>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card title and make up the
								bulk of the card's content.
							</Card.Text>
						</Card.Body>
						<ListGroup className="list-group-flush">
							<ListGroup.Item>Cras justo odio</ListGroup.Item>
							<ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
							<ListGroup.Item>Vestibulum at eros</ListGroup.Item>
						</ListGroup>
						<Card.Body>
							<Card.Link href="#">Card Link</Card.Link>
							<Card.Link href="#">Another Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			))}
		</Row>
		);
	}
}

export default Gridcards;