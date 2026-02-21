import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Event } from '../data/events';
import { ArrowRight, Calendar, MapPin } from 'lucide-react';

interface EventCardProps {
  event: Event;
  index: number;
}

const EventCard: React.FC<EventCardProps> = ({ event, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={`/event/${event.id}`} className="group block h-full">
        <div className="glass-card h-full rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-gold-400/30 group-hover:shadow-gold-500/10 hover:-translate-y-2 flex flex-col">
          <div className="p-8 flex-grow">
            <span className="text-gold-300 text-xs font-bold tracking-wider uppercase mb-2 block">{event.subtitle}</span>
            <h3 className="text-2xl font-serif font-bold text-white group-hover:text-gold-200 transition-colors mb-4">{event.title}</h3>
            <p className="text-silver-400 text-sm mb-6 line-clamp-3">
              {event.description}
            </p>
          </div>
          
          <div className="px-8 pb-8 mt-auto">
            <div className="flex items-center justify-between text-xs text-silver-500 border-t border-white/5 pt-4">
              <div className="flex items-center space-x-4">
                <span className="flex items-center"><Calendar size={14} className="mr-1 text-gold-500" /> {event.date.split(',')[0]}</span>
                <span className="flex items-center"><MapPin size={14} className="mr-1 text-gold-500" /> {event.venue}</span>
              </div>
              <span className="group-hover:translate-x-1 transition-transform text-gold-400">
                <ArrowRight size={16} />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default EventCard;
