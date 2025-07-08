// src/components/admin/calendario/Calendario.tsx
import React, { useState } from 'react';

const Calendario: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const renderHeader = () => {
    const dateFormat = new Intl.DateTimeFormat('es-ES', { month: 'long', year: 'numeric' });

    return (
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)))}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700"
        >
          Anterior
        </button>
        <h2 className="text-xl font-bold text-primary">{dateFormat.format(currentDate)}</h2>
        <button
          onClick={() => setCurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)))}
          className="px-4 py-2 bg-secondary text-white rounded hover:bg-blue-700"
        >
          Siguiente
        </button>
      </div>
    );
  };

  const renderDays = () => {
    const days = [];
    const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
    const totalDays = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

    for (let i = 0; i < startDate; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const isSelected = selectedDate && selectedDate.getDate() === day && selectedDate.getMonth() === currentDate.getMonth();

      days.push(
        <div
          key={`day-${day}`}
          className={`p-2 cursor-pointer hover:bg-accent hover:text-accent-foreground rounded-full flex items-center justify-center ${isSelected ? 'bg-accent text-accent-foreground font-bold' : ''}`}
          onClick={() => setSelectedDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  return (
    <div className="p-4 bg-card rounded-lg shadow-lg">
      {renderHeader()}
      <div className="grid grid-cols-7 gap-1">
        {['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'].map(day => (
          <div key={day} className="text-center font-bold p-2 text-primary">
            {day}
          </div>
        ))}
        {renderDays()}
      </div>
    </div>
  );
};

export default Calendario;
