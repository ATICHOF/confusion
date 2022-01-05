import React from 'react'
import { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
class DishDetail extends Component {

    renderDish(dish){
        if (dish != null){
          return(
            <div className="row">
            <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
            </div>
        <div className="col-12 col-md-5 m-1">
        </div>
        </div>
          )
        }else{
          return(
            <div></div>
          )
        }
      };
      renderComments(comments) {
        if(comments==null){
            return(
                <div></div>
            )
        }
        const showComments = comments.map((cmnt) => {
            return(
                <li key={cmnt.id}>
                    <p>{cmnt.comment}</p>
                    <p>--{cmnt.author},{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(cmnt.date)))}</p>
                </li>
            )
        });

        return(
            <div className="col-12 col-md-5 m-1">
                <h4>Comments</h4>
                {showComments}
            </div>
        )
    };
    render() {
        const dish = this.props;
        if(dish == null)
        {
            return(
                <div></div>
            )
        }else{
        const dishItem = this.renderDish(dish);
        const dishComment = this.renderComments(dish.comments);
        return(
        <div className="container">
            {dishItem}
            {dishComment}
        </div>)
    }
}

}
    export default DishDetail;