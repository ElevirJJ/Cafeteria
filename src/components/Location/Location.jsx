import './Location.scss'

const Location = () => {
  return (
    <div className="modal">
      <h3> Nosso <span>Endereço</span></h3>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253496.95708417794!2d-35.001876084907906!3d-6.903761453378517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7ad19001c14e0e5%3A0xe33e5c3a221fbc1b!2zUmF5IENhZsOp!5e0!3m2!1spt-BR!2sbr!4v1733090103489!5m2!1spt-BR!2sbr" width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'>
        </iframe>
      </div>
    </div>
  );
};

export default Location;
