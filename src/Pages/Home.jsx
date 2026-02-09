import { useAuth } from "../context/AuthContext";
import { useJobs } from "../context/JobContext";

export function Home() {
  const { user } = useAuth();
  const { jobs, acceptJob } = useJobs();

  const availableJobs = jobs.filter((job) => !job.accepted);

  function handleAccept(jobId) {
    acceptJob(jobId, user.id);
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Bem-vindo, {user.name}</h1>

      {user.type === "professional" && (
        <>
          <h2>Vagas disponíveis</h2>

          {availableJobs.map((job) => (
            <div
              key={job.id}
              style={{
                border: "1px solid #ccc",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            >
              <h3>{job.title}</h3>
              <p><b>Restaurante:</b> {job.restaurant}</p>
              <p><b>Local:</b> {job.location}</p>
              <p><b>Horário:</b> {job.time}</p>
              <p><b>Pagamento:</b> R$ {job.payment}</p>

              <button onClick={() => handleAccept(job.id)}>
                Aceitar vaga
              </button>
            </div>
          ))}
        </>
      )}

      {user.type === "restaurant" && (
        <>
          <h2>Painel do Restaurante</h2>
          <p>Você poderá criar vagas em breve.</p>
        </>
      )}
    </div>
  );
}
