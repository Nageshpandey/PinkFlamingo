
export default function Paggination({ totalPages, currentPage, onPageChange }) {

  return (
    <div className='flex flex-row gap-4'>
      <button 
        className={`text-[#E08468] ${currentPage === 1 ? 'hidden' : 'inline-block'} cursor-pointer`} 
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>
      {Array.from({ length: totalPages }, (_, index) => (
        <div 
          key={index} 
          className={`rounded-[50%] py-1 px-2.5 ${currentPage === index + 1 ? 'pbuttonbg text-white' : 'text-black'} cursor-pointer`} 
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </div>
      ))}
      <button 
        className={`text-[#E08468] ${currentPage === totalPages ? 'hidden' : 'inline-block'} cursor-pointer`} 
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </div>
  )
}
