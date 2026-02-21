import { motion } from 'motion/react';
import { events } from '../data/events';
import EventCard from '../components/EventCard';

const Home = () => {
  const engineeringEvents = events.filter(e => e.category === 'Engineering');
  const mbaEvents = events.filter(e => e.category === 'MBA');
  const pharmacyEvents = events.filter(e => e.category === 'Pharmacy');

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="z-10"
        >
          <h2 className="text-gold-300 text-lg md:text-xl tracking-[0.5em] uppercase mb-4 font-medium">
            Silver Jubilee Celebration
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif font-bold mb-6 text-gradient-silver tracking-tight">
            SACET<br />RAJATHOTSAV
          </h1>
          <p className="text-silver-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-10">
            Celebrating 25 years of innovation, technology, and culture. Join us for the grandest fest of the year.
          </p>
          
          <motion.a
            href="#events"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-4 bg-gradient-to-r from-gold-400 to-gold-600 text-black font-bold tracking-widest uppercase text-sm rounded-full shadow-lg shadow-gold-500/20 hover:shadow-gold-500/40 transition-all"
          >
            View Events
          </motion.a>
        </motion.div>
      </section>

      {/* Engineering Events Section */}
      <section id="events" className="py-20 px-6 container mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="text-white">Engineering</span> <span className="text-gold-300">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {engineeringEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* MBA Events Section */}
      <section className="py-20 px-6 container mx-auto border-t border-white/5">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="text-white">MBA</span> <span className="text-gold-300">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mbaEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>

      {/* Pharmacy Events Section */}
      <section className="py-20 px-6 container mx-auto border-t border-white/5">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-center mb-4">
            <span className="text-white">Pharmacy</span> <span className="text-gold-300">Events</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pharmacyEvents.map((event, index) => (
            <EventCard key={event.id} event={event} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
