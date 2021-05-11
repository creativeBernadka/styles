import Clients from "./Clients";
import ChevronLeftIcon from "../icons/ChevronLeftIcon";
import ChevronRightIcon from "../icons/ChevronRightIcon";
import ClosingQuoteIcon from "../icons/ClosingQuoteIcon";
import OpeningQuoteIcon from "../icons/OpeningQuoteIcon";

const TestimonialSection = () => (
  <div className="testimonials">
    <h2 className="testimonials__header">Find out what others make of us:</h2>
    <div className="testimonials__slider">
      <button className="testimonials__navigation-button -desktop">
        <ChevronLeftIcon className="testimonials__navigation-icon" />
      </button>
      <div className="testimonials__text-section">
        <div className="testimonials__text-wrapper">
          <div className="testimonials__testimonial-text">
            <OpeningQuoteIcon className="testimonials__quotation-mark" />
            <h3 className="testimonials__testimonial-header">
              Great for sharing a screenshot!
            </h3>
            <p>
              Dropl is the simplest, most reliable uniwersal way to share a file
              with anyone anywhere. I cant't imagine a quicker way to exchange a
              screenshot than Droplr.
            </p>
            <div className="testimonials__author">
              <h6>Des Traynor</h6>
              <p>Co-Founder @ Intercom</p>
            </div>
            <ClosingQuoteIcon className="testimonials__quotation-mark -right" />
          </div>
        </div>
        <div className="testimonials__mobile-buttons-wrapper">
          <button className="testimonials__navigation-button">
            <ChevronLeftIcon className="testimonials__navigation-icon" />
          </button>
          <button className="testimonials__navigation-button">
            <ChevronRightIcon className="testimonials__navigation-icon" />
          </button>
        </div>
        <div className="testimonials__navigation-pages">
          <div className="testimonials__navigation-single-page -selected" />
          <div className="testimonials__navigation-single-page" />
          <div className="testimonials__navigation-single-page" />
        </div>
      </div>
      <div className="testimonials__image">
        <img src="testimonial.png" />
      </div>
      <button className="testimonials__navigation-button -desktop">
        <ChevronRightIcon className="testimonials__navigation-icon" />
      </button>
    </div>
    <Clients />
  </div>
);

export default TestimonialSection;
