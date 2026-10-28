"use client"
import React, { useState } from 'react'
import {
    LineChart, Line, BarChart, Bar, PieChart, Pie, Cell,
    XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    AreaChart, Area
} from 'recharts'
import {
    TrendingUp, TrendingDown, DollarSign, ShoppingBag,
    Users, Package, Calendar, Download, Filter,
    Eye, ArrowUp, ArrowDown, MoreVertical
} from 'lucide-react'

const Page = () => {
    const [dateRange, setDateRange] = useState('30d')

    // Mock Data - Replace with your real API data
    const salesData = [
        { month: 'Jan', sales: 4000, orders: 240, revenue: 24000 },
        { month: 'Feb', sales: 3000, orders: 198, revenue: 18000 },
        { month: 'Mar', sales: 5000, orders: 320, revenue: 30000 },
        { month: 'Apr', sales: 4500, orders: 280, revenue: 27000 },
        { month: 'May', sales: 6000, orders: 380, revenue: 36000 },
        { month: 'Jun', sales: 5500, orders: 350, revenue: 33000 },
        { month: 'Jul', sales: 7000, orders: 420, revenue: 42000 },
        { month: 'Aug', sales: 6500, orders: 400, revenue: 39000 },
        { month: 'Sep', sales: 8000, orders: 480, revenue: 48000 },
        { month: 'Oct', sales: 7500, orders: 450, revenue: 45000 },
        { month: 'Nov', sales: 9000, orders: 550, revenue: 54000 },
        { month: 'Dec', sales: 10000, orders: 600, revenue: 60000 },
    ]

    const categoryData = [
        { name: 'Electronics', value: 65, color: '#3B82F6', products: 280, revenue: 125000 },
        { name: 'Clothing', value: 25, color: '#10B981', products: 120, revenue: 45000 },
        { name: 'Accessories', value: 10, color: '#F59E0B', products: 45, revenue: 18000 },
    ]

    const orderStatusData = [
        { status: 'Completed', count: 342, color: '#10B981' },
        { status: 'Pending', count: 45, color: '#F59E0B' },
        { status: 'Processing', count: 28, color: '#3B82F6' },
        { status: 'Cancelled', count: 12, color: '#EF4444' },
    ]

    const topProducts = [
        { name: 'MacBook Pro', sales: 245, revenue: 490000, growth: 15 },
        { name: 'iPhone 15', sales: 189, revenue: 188811, growth: 22 },
        { name: 'PlayStation 5', sales: 156, revenue: 78000, growth: -5 },
        { name: 'Dell Monitor', sales: 134, revenue: 40200, growth: 8 },
        { name: 'Mechanical Keyboard', sales: 98, revenue: 11760, growth: 12 },
    ]

    const dailyVisits = [
        { day: 'Mon', visits: 1200, orders: 45, conversion: 3.75 },
        { day: 'Tue', visits: 1350, orders: 52, conversion: 3.85 },
        { day: 'Wed', visits: 1400, orders: 58, conversion: 4.14 },
        { day: 'Thu', visits: 1280, orders: 49, conversion: 3.83 },
        { day: 'Fri', visits: 1500, orders: 65, conversion: 4.33 },
        { day: 'Sat', visits: 1800, orders: 82, conversion: 4.56 },
        { day: 'Sun', visits: 1650, orders: 74, conversion: 4.48 },
    ]

    // Calculate summary metrics
    const totalRevenue = salesData.reduce((sum, item) => sum + item.revenue, 0)
    const totalOrders = salesData.reduce((sum, item) => sum + item.orders, 0)
    const avgOrderValue = totalRevenue / totalOrders
    const conversionRate = (dailyVisits.reduce((sum, d) => sum + d.orders, 0) /
        dailyVisits.reduce((sum, d) => sum + d.visits, 0) * 100).toFixed(1)

    return (
        <div className="p-6 space-y-6  min-h-screen">

            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800">📊 Analytics Dashboard</h1>
                    <p className="text-gray-500 mt-1">Monitor your store performance and trends</p>
                </div>

                <div className="flex gap-3">
                    {/* Date Range Filter */}
                    <select
                        value={dateRange}
                        onChange={(e) => setDateRange(e.target.value)}
                        className="border border-gray-300 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="7d">Last 7 days</option>
                        <option value="30d">Last 30 days</option>
                        <option value="90d">Last 3 months</option>
                        <option value="12m">This year</option>
                    </select>

                    {/* Export Button */}
                    <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 rounded-lg text-sm hover:bg-gray-50 transition">
                        <Download className="w-4 h-4" />
                        Export
                    </button>
                </div>
            </div>

            {/* Key Metrics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-blue-50 rounded-xl">
                            <DollarSign className="w-6 h-6 text-blue-500" />
                        </div>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" /> +23%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mt-3">${(totalRevenue / 1000).toFixed(0)}K</p>
                    <p className="text-sm text-gray-500 mt-1">Total Revenue</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-purple-50 rounded-xl">
                            <ShoppingBag className="w-6 h-6 text-purple-500" />
                        </div>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" /> +18%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mt-3">{totalOrders}</p>
                    <p className="text-sm text-gray-500 mt-1">Total Orders</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-green-50 rounded-xl">
                            <Users className="w-6 h-6 text-green-500" />
                        </div>
                        <span className="text-xs text-red-600 bg-red-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <ArrowDown className="w-3 h-3" /> -5%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mt-3">${avgOrderValue.toFixed(0)}</p>
                    <p className="text-sm text-gray-500 mt-1">Avg Order Value</p>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex items-center justify-between">
                        <div className="p-3 bg-yellow-50 rounded-xl">
                            <TrendingUp className="w-6 h-6 text-yellow-500" />
                        </div>
                        <span className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full flex items-center gap-1">
                            <ArrowUp className="w-3 h-3" /> +2.3%
                        </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-800 mt-3">{conversionRate}%</p>
                    <p className="text-sm text-gray-500 mt-1">Conversion Rate</p>
                </div>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* Revenue Trend */}
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Revenue Trend</h3>
                        <Eye className="w-4 h-4 text-gray-400" />
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={salesData}>
                            <defs>
                                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="#3B82F6" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="revenue" stroke="#3B82F6" fillOpacity={1} fill="url(#colorRevenue)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                {/* Orders vs Sales */}
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Orders vs Sales</h3>
                        <Filter className="w-4 h-4 text-gray-400" />
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={salesData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis yAxisId="left" />
                            <YAxis yAxisId="right" orientation="right" />
                            <Tooltip />
                            <Legend />
                            <Line yAxisId="left" type="monotone" dataKey="orders" stroke="#10B981" name="Orders" />
                            <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#F59E0B" name="Sales ($)" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* Category Distribution */}
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Sales by Category</h3>
                        <MoreVertical className="w-4 h-4 text-gray-400" />
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <PieChart>
                            <Pie
                                data={categoryData}
                                cx="50%"
                                cy="50%"
                                innerRadius={60}
                                outerRadius={100}
                                paddingAngle={5}
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            >
                                {categoryData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                </div>

                {/* Order Status */}
                <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="font-semibold text-gray-800">Order Status</h3>
                        <Calendar className="w-4 h-4 text-gray-400" />
                    </div>
                    <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={orderStatusData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="status" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="count" fill="#3B82F6">
                                {orderStatusData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))}
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Top Products Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100">
                <div className="p-5 border-b border-gray-100">
                    <div className="flex justify-between items-center">
                        <h3 className="font-semibold text-gray-800">🏆 Top Performing Products</h3>
                        <button className="text-sm text-blue-600 hover:text-blue-700">View All →</button>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50 border-b border-gray-100">
                            <tr>
                                <th className="text-left p-4 text-sm font-medium text-gray-500">Product Name</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-500">Units Sold</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-500">Revenue</th>
                                <th className="text-left p-4 text-sm font-medium text-gray-500">Growth</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topProducts.map((product, idx) => (
                                <tr key={idx} className="border-b border-gray-50 hover:bg-gray-50 transition">
                                    <td className="p-4 font-medium text-gray-800">{product.name}</td>
                                    <td className="p-4 text-gray-600">{product.sales}</td>
                                    <td className="p-4 text-gray-600">${product.revenue.toLocaleString()}</td>
                                    <td className="p-4">
                                        <span className={`inline-flex items-center gap-1 text-sm ${product.growth > 0 ? 'text-green-600' : 'text-red-600'}`}>
                                            {product.growth > 0 ? <ArrowUp className="w-3 h-3" /> : <ArrowDown className="w-3 h-3" />}
                                            {Math.abs(product.growth)}%
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {/* Daily Performance */}
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
                <h3 className="font-semibold text-gray-800 mb-4">📅 Weekly Performance</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={dailyVisits}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Bar yAxisId="left" dataKey="visits" fill="#3B82F6" name="Visits" />
                        <Bar yAxisId="right" dataKey="conversion" fill="#10B981" name="Conversion Rate %" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default Page