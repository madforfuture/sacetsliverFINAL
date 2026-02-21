import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { events } from '../data/events';
import { ArrowLeft, Calendar, Clock, MapPin, CheckCircle, Share2, X } from 'lucide-react';
import { useEffect, useState } from 'react';

const EventDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [showBranchModal, setShowBranchModal] = useState(false);
  const event = events.find(e => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-serif text-gold-300 mb-4">Event Not Found</h2>
        <Link to="/" className="text-silver-200 hover:text-white underline">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20 px-4 md:px-8 container mx-auto">
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex items-center text-silver-400 hover:text-gold-300 mb-8 transition-colors group"
      >
        <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Events
      </motion.button>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left Column: Key Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-5 space-y-8"
        >
          <div className="glass-card p-8 rounded-2xl border-l-4 border-gold-500 bg-gradient-to-r from-gold-500/5 to-transparent">
             <span className="text-gold-400 font-bold tracking-widest uppercase text-sm mb-2 block">{event.subtitle}</span>
             <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{event.title}</h1>
             <p className="text-silver-300 text-lg leading-relaxed mb-6">
               {event.description}
             </p>
          </div>

          <div className="glass-card p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-serif text-gold-200 border-b border-white/10 pb-2 mb-4">Event Details</h3>
            
            <div className="flex items-start space-x-4">
              <div className="bg-white/5 p-3 rounded-lg text-gold-400">
                <Calendar size={20} />
              </div>
              <div>
                <p className="text-xs text-silver-500 uppercase tracking-wider">Date</p>
                <p className="text-silver-100 font-medium">{event.date}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/5 p-3 rounded-lg text-gold-400">
                <Clock size={20} />
              </div>
              <div>
                <p className="text-xs text-silver-500 uppercase tracking-wider">Time</p>
                <p className="text-silver-100 font-medium">{event.time}</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-white/5 p-3 rounded-lg text-gold-400">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-silver-500 uppercase tracking-wider">Venue</p>
                <p className="text-silver-100 font-medium">{event.venue}</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4">
            {event.singleRegistrationLink ? (
              <a 
                href={event.singleRegistrationLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-colors shadow-lg shadow-gold-500/20 text-center flex items-center justify-center uppercase tracking-widest text-sm"
              >
                Register Now
              </a>
            ) : (
              <button 
                onClick={() => setShowBranchModal(true)}
                className="flex-1 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-xl transition-colors shadow-lg shadow-gold-500/20 text-center flex items-center justify-center uppercase tracking-widest text-sm"
              >
                Register Now
              </button>
            )}
            <button className="p-4 glass-card hover:bg-white/10 rounded-xl text-gold-300 transition-colors">
              <Share2 size={20} />
            </button>
          </div>
        </motion.div>

        {/* Right Column: Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-7 space-y-10"
        >
          <div>
            <h3 className="text-2xl font-serif text-white mb-6 flex items-center">
              <span className="w-8 h-[1px] bg-gold-500 mr-4"></span>
              Rules & Regulations
            </h3>
            <ul className="space-y-4">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start text-silver-400 group">
                  <CheckCircle size={18} className="mr-3 text-gold-500/50 group-hover:text-gold-400 mt-1 transition-colors" />
                  <span className="group-hover:text-silver-200 transition-colors">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-card p-8 rounded-2xl">
            <h4 className="text-gold-300 font-serif text-xl mb-2">Prize Pool</h4>
            <p className="text-silver-400">
              Win exciting cash prizes, certificates, and trophies. Participation certificates will be provided to all registered candidates.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Branch Selection Modal */}
      <AnimatePresence>
        {showBranchModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowBranchModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="glass-card w-full max-w-md p-8 rounded-2xl relative border border-gold-500/30 shadow-2xl shadow-gold-500/10"
              onClick={e => e.stopPropagation()}
            >
              <button 
                onClick={() => setShowBranchModal(false)}
                className="absolute top-4 right-4 text-silver-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h3 className="text-2xl font-serif font-bold text-center mb-2 text-white">Select Your Branch</h3>
              <p className="text-silver-400 text-center text-sm mb-8">Choose your department to proceed with registration</p>

              <div className="grid grid-cols-1 gap-4">
                {Object.entries(event.registrationLinks || {}).map(([branch, link]) => (
                  <a
                    key={branch}
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-4 px-6 bg-white/5 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-500 rounded-xl transition-all duration-300 text-center font-bold tracking-wider group"
                  >
                    <span className="group-hover:scale-105 inline-block transition-transform">{branch}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventDetail;
