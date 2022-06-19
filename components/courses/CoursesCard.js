export default function ({ courses }) {
  return courses.map((course) => (
    <div className="flex flex-col bg-gray-50">
      <h2>{course.title}</h2>
      <p>{course.description}</p>
    </div>
  ))
}
