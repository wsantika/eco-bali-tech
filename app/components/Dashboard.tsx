'use client';

import { Trash2, Recycle, Users, Landmark, TrendingDown, TrendingUp } from 'lucide-react';
import SectionWrapper from './SectionWrapper';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  LineChart, Line, PieChart, Pie, Cell, AreaChart, Area, Legend,
} from 'recharts';
import { wasteByCategory, weeklyTrend, wasteComposition, reductionEstimate, statsCards } from '@/app/data/waste-data';
import { useState, useEffect } from 'react';

const iconMap: Record<string, React.ElementType> = {
  trash: Trash2,
  recycle: Recycle,
  users: Users,
  landmark: Landmark,
};

const tooltipStyle = {
  background: 'rgba(255,255,255,0.95)',
  border: 'none',
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
};

export default function Dashboard() {
  // Only render charts on client to avoid SSR dimension issues
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <SectionWrapper id="dashboard" className="bg-white">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-1.5 rounded-full bg-eco-blue/10 text-eco-blue text-sm font-semibold mb-4 animate-on-scroll">
          📊 Bali Environment Dashboard
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold text-eco-dark mb-4 animate-on-scroll">
          Data Lingkungan <span className="eco-gradient-text">Bali</span>
        </h2>
        <p className="text-eco-gray max-w-2xl mx-auto animate-on-scroll">
          Visualisasi data pengelolaan sampah dan dampak lingkungan di Bali (data simulasi untuk demonstrasi).
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {statsCards.map((card) => {
          const Icon = iconMap[card.icon] || Trash2;
          return (
            <div key={card.label} className="glass-card p-5 animate-on-scroll">
              <div className="flex items-center justify-between mb-3">
                <div className="w-10 h-10 bg-eco-green/10 rounded-xl flex items-center justify-center">
                  <Icon className="w-5 h-5 text-eco-green" />
                </div>
                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${
                  card.positive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {card.positive ? <TrendingUp className="w-3 h-3 inline mr-0.5" /> : <TrendingDown className="w-3 h-3 inline mr-0.5" />}
                  {card.change}
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-eco-dark">
                {card.value}<span className="text-sm font-normal text-eco-gray ml-1">{card.unit}</span>
              </div>
              <div className="text-xs text-eco-gray mt-1">{card.label}</div>
            </div>
          );
        })}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Bar Chart - Waste by Category */}
        <div className="glass-card p-5 sm:p-6 animate-on-scroll">
          <h3 className="text-lg font-bold text-eco-dark mb-4">Kategori Sampah Dominan</h3>
          <div style={{ width: '100%', height: 300, minWidth: 0 }}>
            {mounted && (
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={wasteByCategory} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="kategori" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={tooltipStyle}
                    formatter={(value) => [`${Number(value).toLocaleString('id-ID')} ton`, 'Jumlah']}
                  />
                  <Bar dataKey="jumlah" radius={[6, 6, 0, 0]}>
                    {wasteByCategory.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.warna} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Pie Chart - Composition */}
        <div className="glass-card p-5 sm:p-6 animate-on-scroll">
          <h3 className="text-lg font-bold text-eco-dark mb-4">Komposisi Sampah</h3>
          <div style={{ width: '100%', height: 300, minWidth: 0 }}>
            {mounted && (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={wasteComposition}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={95}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {wasteComposition.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={tooltipStyle}
                    formatter={(value) => [`${value}%`, 'Persentase']}
                  />
                  <Legend
                    verticalAlign="bottom"
                    iconType="circle"
                    iconSize={8}
                    wrapperStyle={{ fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Line Chart - Weekly Trend */}
        <div className="glass-card p-5 sm:p-6 animate-on-scroll">
          <h3 className="text-lg font-bold text-eco-dark mb-4">Tren Mingguan</h3>
          <div style={{ width: '100%', height: 300, minWidth: 0 }}>
            {mounted && (
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={weeklyTrend} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="minggu" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={tooltipStyle}
                    formatter={(value) => [`${Number(value).toLocaleString('id-ID')} ton`]}
                  />
                  <Line type="monotone" dataKey="sampahTotal" stroke="#EF4444" strokeWidth={2} name="Sampah Total" dot={false} />
                  <Line type="monotone" dataKey="daurUlang" stroke="#16A34A" strokeWidth={2} name="Daur Ulang" dot={false} />
                  <Legend iconType="line" wrapperStyle={{ fontSize: '12px' }} />
                </LineChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>

        {/* Area Chart - Reduction */}
        <div className="glass-card p-5 sm:p-6 animate-on-scroll">
          <h3 className="text-lg font-bold text-eco-dark mb-4">Estimasi Pengurangan Sampah</h3>
          <div style={{ width: '100%', height: 300, minWidth: 0 }}>
            {mounted && (
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={reductionEstimate} margin={{ top: 5, right: 10, left: -10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E2E8F0" />
                  <XAxis dataKey="bulan" tick={{ fontSize: 12 }} />
                  <YAxis tick={{ fontSize: 12 }} />
                  <Tooltip contentStyle={tooltipStyle}
                    formatter={(value) => [`${Number(value).toLocaleString('id-ID')} ton`]}
                  />
                  <Area type="monotone" dataKey="sebelum" stroke="#EF4444" fill="#FEE2E2" strokeWidth={2} name="Tanpa Program" />
                  <Area type="monotone" dataKey="sesudah" stroke="#16A34A" fill="#DCFCE7" strokeWidth={2} name="Dengan Program" />
                  <Legend iconType="line" wrapperStyle={{ fontSize: '12px' }} />
                </AreaChart>
              </ResponsiveContainer>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
