import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';

function Banner({ banner }) {
  const [carouselId, setCarouselId] = useState(1);

  function plusSlides(n) {
    showSlides(carouselId + n);
  }

  function currentSlide(n) {
    showSlides(n);
  }

  function showSlides(n) {
    let slideIndex = 1;
    if (n > banner.length) {
      slideIndex = 1;
    } else if (n < 1) {
      slideIndex = banner.length;
    } else slideIndex = n;
    setCarouselId(slideIndex);
  }
  return (
    <>
      <div className="slideshow-container">
        {banner.map((each) => (
          <div
            className={
              carouselId == each.order ? 'swiper__item_active' : 'swiper__item'
            }
            key={each.order}
          >
            <img
              src={each.bannerImageUrl}
              style={{ width: '100%' }}
              className="swiper__img"
            />
          </div>
        ))}

        <a className="prev" onClick={() => plusSlides(-1)}>
          PREV
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          NEXT
        </a>
      </div>
      <br />

      <div style={{ textAlign: 'center' }}>
        {banner.map((each) => (
          <span
            className={each.order === carouselId ? 'dot_active' : 'dot'}
            key={each.order}
            onClick={() => currentSlide(each.order)}
          ></span>
        ))}
      </div>
    </>
  );
}

Banner.propTypes = {
  banner: PropTypes.array,
};

export default memo(Banner);

// class Pagination extends React.Component {
//     constructor( props ){
//         super( props );
//     }

//     paginationRender = ( source, activeItem, handleEvent ) => {

//         const items = source.map(( item, i ) => {
//             let itemClass = 'page-item';
//             if( item.id === activeItem ){
//                 itemClass += ' active';
//             }
//             return <li key={i} className={ itemClass }>
//                 <a className="page-link" href="#"
//                 onClick={ e => handleEvent( e, 'clickItem', item )}>
//                     { i + 1 }</a>
//             </li>;
//         });

//         return <ul className="pagination pagination-sm justify-content-center">
//             <li className="page-item">
//                 <a className="page-link" href="#"
//                     onClick={e => handleEvent( e, 'prevItem', {}, items )}>Prev</a>
//             </li>
//             {items}
//             <li className="page-item">
//                 <a className="page-link" href="#"
//                     onClick={e => handleEvent( e, 'nextItem', {}, items )}>Next</a>
//             </li>
//         </ul>;
//     };

//     render() {
//         const { itemsSrc, activeItem, handleEvent } = this.props;
//         //console.info('MenuContent->render()', { source });

//         return <div>{this.paginationRender( itemsSrc, activeItem, handleEvent ) }</div>;
//     }
// }

// class Carousel extends React.Component {
//     constructor( props ){
//         super( props );
//     }

//     carouselRender = (  source, activeItem, handleEvent ) => {
//         //console.info('Carousel->carouselRender [0]', { source, state: this.state });

//          const indicators = source.map(( item, i ) => {
//             let itemClass = '';
//             if( item.id === activeItem ){
//                 itemClass += ' active';
//             }
//             //console.info('Carousel->carouselRender [3]', { id: item.id, item, pageItemClass, activeItem: activeItem });
//             return <li key={i} data-target="#demo" data-slide-to="1" className={ itemClass }
//                              onClick={ e => handleEvent( e, 'clickItem', item )}>></li>;
//         });

//         const imgs = source.map(( item, i ) => {
//             let itemClass = 'carousel-item';
//             if( item.id === activeItem ){
//                 itemClass += ' active';
//             }
//             //console.info('Carousel->carouselRender [5]', { id: item.id, item, pageItemClass, activeItem: activeItem });
//             return <div key={i} className={ itemClass }>
//                 <img src={item.src} className="img-fluid" alt="New York" />
//             </div>;
//         });

//         //console.info('Carousel->carouselRender [7]', { });
//         return <div id="demo" className="carousel slide" data-ride="carousel">
//                             <ul className="carousel-indicators">
//                                 { indicators }
//                             </ul>
//                             <div className="carousel-inner">
//                                 { imgs }
//                             </div>
//                             <a className="carousel-control-prev" href="#demo" data-slide="prev">
//                                 <span className="carousel-control-prev-icon"
//                                     onClick={e => handleEvent( e, 'prevItem', {}, source )}>
//                                 </span>
//                             </a>
//                             <a className="carousel-control-next" href="#demo" data-slide="next">
//                                 <span className="carousel-control-next-icon"
//                                     onClick={e => handleEvent( e, 'nextItem', {}, source )}>
//                                 </span>
//                             </a>
//                         </div>;
//     };

//     render() {
//         const { itemsSrc, activeItem, handleEvent } = this.props;
//         //console.info('MenuContent->render()', { source });

//         return <div>{this.carouselRender( itemsSrc, activeItem, handleEvent ) }</div>;
//     }
// }

// const inputProps = {
//     itemsSrc: [
//             { id: 0,
//                 name: 'Los Angeles',
//                 level: 'basic',
//                 src: 'https://www.w3schools.com/bootstrap4/la.jpg'
//          },
//             {
//                 id: 1,
//                 name: 'Chicago',
//                 level: 'basic',
//                 src: 'https://www.w3schools.com/bootstrap4/chicago.jpg'
//             },
//             {
//                 id: 2,
//                 name: 'New York',
//                 level: 'advanced',
//                 src: 'https://www.w3schools.com/bootstrap4/ny.jpg'
//             },
//         ],
// };

// class Wrapper extends React.Component {
//     constructor( props ){
//         super( props );
//         this.state = {
//             activeItem: 0,
//         };
//     }

//     handleEvent = ( e, actionType, item, items ) => {
//         e.preventDefault();
//         let itemsLength, activeItem;

//         switch( actionType ){
//             case 'clickItem':
//                 //console.info('MenuContent->paginationRender', { actionType, id: item.id, item });
//                 this.setState({ activeItem: item.id });
//             break;
//             case 'prevItem':
//                 activeItem = this.state.activeItem;
//                 if ( activeItem === 0  ){
//                     break;
//                 }
//                 activeItem -= 1;
//                 this.setState({ activeItem });
//             break;
//             case 'nextItem':
//                 itemsLength = items.length;
//                 activeItem = this.state.activeItem;
//                 if (activeItem === itemsLength -1) {
//                     break;
//                 }
//                 activeItem += 1;
//                 this.setState({ activeItem });
//             break;
//         }
//         //console.info('MenuContent->handleEvent()', { actionType, item, items });

//     }

//     render(){
//         let props = this.props;
//         const { activeItem } = this.state;
//         props = { ...props, handleEvent: this.handleEvent, activeItem };

//         return <div className="App">

//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-1">
//                     </div>
//                     <div className="col-10">

//                         <Pagination { ...props }/>
//                         <Carousel { ...props }/>
//                     </div>
//                     <div className="col-1">
//                     </div>
//                 </div>
//             </div>
//         </div>;
//     }
// }

// ReactDOM.render(<Wrapper {  ...inputProps }/>, document.getElementById('app'));
