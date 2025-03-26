"use client"

import React, { useState } from "react"
import { motion } from "framer-motion"
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd"

const MissionPlanner = () => {
  const [activeStep, setActiveStep] = useState(1)
  const [missionName, setMissionName] = useState("")
  const [missionDate, setMissionDate] = useState("")
  const [missionDuration, setMissionDuration] = useState("")
  const [missionType, setMissionType] = useState("")
  const [crewSize, setCrewSize] = useState("")
  const [cargoItems, setCargoItems] = useState([
    { id: 1, name: "Life Support Module", weight: 1200, priority: "High", category: "Essential" },
    { id: 2, name: "Science Equipment", weight: 850, priority: "Medium", category: "Research" },
    { id: 3, name: "Food Supplies", weight: 650, priority: "High", category: "Consumable" },
  ])
  const [newItem, setNewItem] = useState({ name: "", weight: "", priority: "Medium", category: "Essential" })
  const [editingItemId, setEditingItemId] = useState(null)

  // Compartments for drag and drop
  const [compartments, setCompartments] = useState([
    { id: "compartment-1", name: "Primary Storage", capacity: 3000, items: [] },
    { id: "compartment-2", name: "Secondary Storage", capacity: 2500, items: [] },
    { id: "compartment-3", name: "Tertiary Storage", capacity: 1500, items: [] },
  ])

  const handleNextStep = () => {
    setActiveStep(activeStep + 1)
  }

  const handlePrevStep = () => {
    setActiveStep(activeStep - 1)
  }

  const handleAddItem = () => {
    if (newItem.name && newItem.weight) {
      setCargoItems([
        ...cargoItems,
        {
          id: cargoItems.length + 1,
          name: newItem.name,
          weight: Number.parseInt(newItem.weight),
          priority: newItem.priority,
          category: newItem.category,
        },
      ])
      setNewItem({ name: "", weight: "", priority: "Medium", category: "Essential" })
    }
  }

  const handleDeleteItem = (id) => {
    setCargoItems(cargoItems.filter((item) => item.id !== id))
  }

  const handleEditItem = (id) => {
    setEditingItemId(id)
    const itemToEdit = cargoItems.find((item) => item.id === id)
    setNewItem({
      name: itemToEdit.name,
      weight: itemToEdit.weight.toString(),
      priority: itemToEdit.priority,
      category: itemToEdit.category,
    })
  }

  const handleSaveEdit = () => {
    if (newItem.name && newItem.weight) {
      setCargoItems(
        cargoItems.map((item) =>
          item.id === editingItemId
            ? {
                ...item,
                name: newItem.name,
                weight: Number.parseInt(newItem.weight),
                priority: newItem.priority,
                category: newItem.category,
              }
            : item,
        ),
      )
      setNewItem({ name: "", weight: "", priority: "Medium", category: "Essential" })
      setEditingItemId(null)
    }
  }

  const handleCancelEdit = () => {
    setNewItem({ name: "", weight: "", priority: "Medium", category: "Essential" })
    setEditingItemId(null)
  }

  const onDragEnd = (result) => {
    const { source, destination } = result

    // Dropped outside a droppable area
    if (!destination) return

    // Moving within the same list
    if (source.droppableId === destination.droppableId) {
      if (source.droppableId === "items") {
        const reorderedItems = Array.from(cargoItems)
        const [movedItem] = reorderedItems.splice(source.index, 1)
        reorderedItems.splice(destination.index, 0, movedItem)
        setCargoItems(reorderedItems)
      } else {
        // Moving within a compartment
        const compartmentIndex = compartments.findIndex((c) => c.id === source.droppableId)
        if (compartmentIndex !== -1) {
          const newCompartments = [...compartments]
          const items = Array.from(newCompartments[compartmentIndex].items)
          const [movedItem] = items.splice(source.index, 1)
          items.splice(destination.index, 0, movedItem)
          newCompartments[compartmentIndex].items = items
          setCompartments(newCompartments)
        }
      }
    } else {
      // Moving between different lists
      if (source.droppableId === "items") {
        // Moving from items to a compartment
        const compartmentIndex = compartments.findIndex((c) => c.id === destination.droppableId)
        if (compartmentIndex !== -1) {
          const newCompartments = [...compartments]
          const newItems = Array.from(cargoItems)
          const [movedItem] = newItems.splice(source.index, 1)
          newCompartments[compartmentIndex].items.splice(destination.index, 0, movedItem)
          setCompartments(newCompartments)
          setCargoItems(newItems)
        }
      } else if (destination.droppableId === "items") {
        // Moving from a compartment to items
        const compartmentIndex = compartments.findIndex((c) => c.id === source.droppableId)
        if (compartmentIndex !== -1) {
          const newCompartments = [...compartments]
          const newItems = Array.from(cargoItems)
          const [movedItem] = newCompartments[compartmentIndex].items.splice(source.index, 1)
          newItems.splice(destination.index, 0, movedItem)
          setCompartments(newCompartments)
          setCargoItems(newItems)
        }
      } else {
        // Moving between compartments
        const sourceCompartmentIndex = compartments.findIndex((c) => c.id === source.droppableId)
        const destCompartmentIndex = compartments.findIndex((c) => c.id === destination.droppableId)
        if (sourceCompartmentIndex !== -1 && destCompartmentIndex !== -1) {
          const newCompartments = [...compartments]
          const [movedItem] = newCompartments[sourceCompartmentIndex].items.splice(source.index, 1)
          newCompartments[destCompartmentIndex].items.splice(destination.index, 0, movedItem)
          setCompartments(newCompartments)
        }
      }
    }
  }

  const totalWeight = cargoItems.reduce((sum, item) => sum + item.weight, 0)
  const priorityDistribution = {
    High: cargoItems.filter((item) => item.priority === "High").length,
    Medium: cargoItems.filter((item) => item.priority === "Medium").length,
    Low: cargoItems.filter((item) => item.priority === "Low").length,
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 border-red-500 text-red-800"
      case "Medium":
        return "bg-yellow-100 border-yellow-500 text-yellow-800"
      case "Low":
        return "bg-green-100 border-green-500 text-green-800"
      default:
        return "bg-gray-100 border-gray-500 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-[#F5F5F5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-[#1A237E] mb-4">Mission Planner</h1>
          <p className="text-xl text-[#607D8B] max-w-3xl mx-auto">
            Optimize your cargo allocation with our intelligent mission planning tool.
          </p>
        </motion.div>

        {/* Stepper */}
        <div className="mb-8">
          <div className="flex items-center justify-center">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    activeStep >= step ? "bg-[#1A237E] text-white" : "bg-gray-200 text-gray-600"
                  }`}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-24 h-1 mx-2 ${activeStep > step ? "bg-[#1A237E]" : "bg-gray-200"}`}></div>
                )}
              </React.Fragment>
            ))}
          </div>
          <div className="flex justify-between mt-2 px-4">
            <span className={`text-sm ${activeStep === 1 ? "font-medium text-[#1A237E]" : "text-gray-500"}`}>
              Mission Details
            </span>
            <span className={`text-sm ${activeStep === 2 ? "font-medium text-[#1A237E]" : "text-gray-500"}`}>
              Cargo Planning
            </span>
            <span className={`text-sm ${activeStep === 3 ? "font-medium text-[#1A237E]" : "text-gray-500"}`}>
              Review & Submit
            </span>
          </div>
        </div>

        {/* Step 1: Mission Details */}
        {activeStep === 1 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg p-6 mb-8"
          >
            <h2 className="text-2xl font-bold text-[#1A237E] mb-6">Mission Details</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                  placeholder="Enter mission name"
                  value={missionName}
                  onChange={(e) => setMissionName(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Launch Date</label>
                <input
                  type="date"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                  value={missionDate}
                  onChange={(e) => setMissionDate(e.target.value)}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Duration (days)</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                  placeholder="Enter duration"
                  min="1"
                  value={missionDuration}
                  onChange={(e) => setMissionDuration(e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Mission Type</label>
                <select
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                  value={missionType}
                  onChange={(e) => setMissionType(e.target.value)}
                >
                  <option value="">Select mission type</option>
                  <option value="Orbital">Orbital</option>
                  <option value="Lunar">Lunar</option>
                  <option value="Mars">Mars</option>
                  <option value="Deep Space">Deep Space</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Crew Size</label>
                <input
                  type="number"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                  placeholder="Enter crew size"
                  min="0"
                  value={crewSize}
                  onChange={(e) => setCrewSize(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end">
              <button
                className="px-6 py-2 bg-[#1A237E] text-white rounded-md hover:bg-[#283593] transition-colors"
                onClick={handleNextStep}
              >
                Next: Cargo Planning
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 2: Cargo Planning */}
        {activeStep === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#1A237E] mb-6">Cargo Planning</h2>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Add Cargo Items</h3>

                <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-4">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Item Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                      placeholder="Enter item name"
                      value={newItem.name}
                      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
                    <input
                      type="number"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                      placeholder="Enter weight"
                      min="0"
                      value={newItem.weight}
                      onChange={(e) => setNewItem({ ...newItem, weight: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Priority</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                      value={newItem.priority}
                      onChange={(e) => setNewItem({ ...newItem, priority: e.target.value })}
                    >
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-[#1A237E] focus:border-[#1A237E]"
                      value={newItem.category}
                      onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    >
                      <option value="Essential">Essential</option>
                      <option value="Research">Research</option>
                      <option value="Consumable">Consumable</option>
                      <option value="Equipment">Equipment</option>
                      <option value="Spare">Spare Parts</option>
                    </select>
                  </div>
                </div>

                <div className="flex justify-end">
                  {editingItemId ? (
                    <div className="flex space-x-2">
                      <button
                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                        onClick={handleCancelEdit}
                      >
                        Cancel
                      </button>
                      <button
                        className="px-4 py-2 bg-[#1A237E] text-white rounded-md hover:bg-[#283593] transition-colors"
                        onClick={handleSaveEdit}
                      >
                        Save Changes
                      </button>
                    </div>
                  ) : (
                    <button
                      className="px-4 py-2 bg-[#1A237E] text-white rounded-md hover:bg-[#283593] transition-colors"
                      onClick={handleAddItem}
                    >
                      Add Item
                    </button>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Cargo Manifest</h3>

                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Weight (kg)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Priority
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cargoItems.map((item) => (
                        <tr key={item.id}>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight} kg</td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            <span
                              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}
                            >
                              {item.priority}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-[#1A237E] hover:text-[#283593] mr-3"
                              onClick={() => handleEditItem(item.id)}
                            >
                              Edit
                            </button>
                            <button
                              className="text-red-600 hover:text-red-800"
                              onClick={() => handleDeleteItem(item.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot className="bg-gray-50">
                      <tr>
                        <th
                          scope="row"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Total
                        </th>
                        <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900">
                          {totalWeight} kg
                        </td>
                        <td colSpan="3"></td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Cargo Distribution</h3>

              <DragDropContext onDragEnd={onDragEnd}>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-1">
                    <h4 className="text-md font-medium text-gray-700 mb-2">Available Items</h4>
                    <Droppable droppableId="items">
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.droppableProps}
                          className="bg-gray-100 rounded-md p-4 min-h-[300px]"
                        >
                          {cargoItems.length === 0 ? (
                            <p className="text-center text-gray-500 italic">No items available</p>
                          ) : (
                            cargoItems.map((item, index) => (
                              <Draggable key={item.id} draggableId={`item-${item.id}`} index={index}>
                                {(provided) => (
                                  <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    className={`mb-2 p-3 rounded-md border-l-4 ${getPriorityColor(item.priority)}`}
                                  >
                                    <div className="font-medium">{item.name}</div>
                                    <div className="text-sm text-gray-600 flex justify-between">
                                      <span>{item.weight} kg</span>
                                      <span>{item.category}</span>
                                    </div>
                                  </div>
                                )}
                              </Draggable>
                            ))
                          )}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </div>

                  {compartments.map((compartment) => (
                    <div key={compartment.id} className="lg:col-span-1">
                      <h4 className="text-md font-medium text-gray-700 mb-2">{compartment.name}</h4>
                      <div className="text-sm text-gray-500 mb-2">Capacity: {compartment.capacity} kg</div>
                      <Droppable droppableId={compartment.id}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className="bg-gray-100 rounded-md p-4 min-h-[300px]"
                          >
                            {compartment.items.length === 0 ? (
                              <p className="text-center text-gray-500 italic">Drop items here</p>
                            ) : (
                              compartment.items.map((item, index) => (
                                <Draggable key={item.id} draggableId={`compartment-item-${item.id}`} index={index}>
                                  {(provided) => (
                                    <div
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      className={`mb-2 p-3 rounded-md border-l-4 ${getPriorityColor(item.priority)}`}
                                    >
                                      <div className="font-medium">{item.name}</div>
                                      <div className="text-sm text-gray-600 flex justify-between">
                                        <span>{item.weight} kg</span>
                                        <span>{item.category}</span>
                                      </div>
                                    </div>
                                  )}
                                </Draggable>
                              ))
                            )}
                            {provided.placeholder}
                          </div>
                        )}
                      </Droppable>
                      <div className="mt-2 text-sm text-gray-600">
                        Used: {compartment.items.reduce((sum, item) => sum + item.weight, 0)} kg
                      </div>
                    </div>
                  ))}
                </div>
              </DragDropContext>
            </div>

            <div className="flex justify-between">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                onClick={handlePrevStep}
              >
                Back: Mission Details
              </button>
              <button
                className="px-6 py-2 bg-[#1A237E] text-white rounded-md hover:bg-[#283593] transition-colors"
                onClick={handleNextStep}
              >
                Next: Review & Submit
              </button>
            </div>
          </motion.div>
        )}

        {/* Step 3: Review & Submit */}
        {activeStep === 3 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h2 className="text-2xl font-bold text-[#1A237E] mb-6">Review Mission Plan</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Mission Details</h3>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Mission Name</p>
                        <p className="font-medium">{missionName || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Launch Date</p>
                        <p className="font-medium">{missionDate || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="font-medium">{missionDuration ? `${missionDuration} days` : "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Mission Type</p>
                        <p className="font-medium">{missionType || "Not specified"}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Crew Size</p>
                        <p className="font-medium">{crewSize || "Not specified"}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Cargo Summary</h3>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Total Items</p>
                        <p className="font-medium">{cargoItems.length}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Total Weight</p>
                        <p className="font-medium">{totalWeight} kg</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Priority Distribution</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                            High: {priorityDistribution.High}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
                            Medium: {priorityDistribution.Medium}
                          </span>
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Low: {priorityDistribution.Low}
                          </span>
                        </div>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Compartment Usage</p>
                        <div className="space-y-1 mt-1">
                          {compartments.map((compartment) => {
                            const usedWeight = compartment.items.reduce((sum, item) => sum + item.weight, 0)
                            const usagePercentage = Math.round((usedWeight / compartment.capacity) * 100)
                            return (
                              <div key={compartment.id} className="text-xs">
                                <div className="flex justify-between">
                                  <span>{compartment.name}</span>
                                  <span>{usagePercentage}%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-1.5">
                                  <div
                                    className={`h-1.5 rounded-full ${
                                      usagePercentage > 90
                                        ? "bg-red-500"
                                        : usagePercentage > 70
                                          ? "bg-yellow-500"
                                          : "bg-green-500"
                                    }`}
                                    style={{ width: `${usagePercentage}%` }}
                                  ></div>
                                </div>
                              </div>
                            )
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Cargo Manifest</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Weight (kg)
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Priority
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Category
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Compartment
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {cargoItems.map((item) => {
                        const itemCompartment = compartments.find((c) => c.items.some((i) => i.id === item.id))

                        return (
                          <tr key={item.id}>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {item.name}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.weight} kg</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}
                              >
                                {item.priority}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {itemCompartment ? itemCompartment.name : "Unassigned"}
                            </td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-blue-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-blue-800">Optimization Recommendations</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <ul className="list-disc pl-5 space-y-1">
                        <li>
                          Consider redistributing high-priority items across multiple compartments for redundancy.
                        </li>
                        <li>The weight distribution could be optimized for better spacecraft balance.</li>
                        <li>Group similar categories together for easier access during the mission.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <button
                className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
                onClick={handlePrevStep}
              >
                Back: Cargo Planning
              </button>
              <button
                className="px-6 py-2 bg-[#FF6D00] text-white rounded-md hover:bg-[#FF8F00] transition-colors"
                onClick={() => alert("Mission plan submitted successfully!")}
              >
                Submit Mission Plan
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default MissionPlanner

