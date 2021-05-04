package br.gov.go.goiania.atendefacil.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import br.gov.go.goiania.atendefacil.domain.Calendario;
import br.gov.go.goiania.atendefacil.domain.Grade;
import br.gov.go.goiania.atendefacil.domain.Servico;
import br.gov.go.goiania.atendefacil.domain.Unidade;
import br.gov.go.goiania.atendefacil.dto.GradeDto;
import br.gov.go.goiania.atendefacil.repository.CalendarioRepository;
import br.gov.go.goiania.atendefacil.repository.GradeRepository;
import br.gov.go.goiania.atendefacil.repository.ServicoRepository;
import br.gov.go.goiania.atendefacil.repository.UnidadeRepository;

@Service
public class GradeService {
	
	@Autowired
	private GradeRepository gr;
	
	@Autowired
	private CalendarioRepository cr;
	
	@Autowired
	private ServicoRepository sr;
	
	@Autowired
	private UnidadeRepository ur;
	
	public Iterable<Grade> listarGrade(){
		return gr.findAll();
	}
	
	public Optional<Grade> gradeById(Long id){
		return gr.findById(id);
	}
	
	public void gravar(Grade grade) {
	
		Calendario calendario =  cr.findById(grade.getCalendario().getId()).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Calendario não Encontrado"));
		
		Servico servico = sr.findById(grade.getServico().getId()).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Serviço não Encontrado"));
		
		Unidade unidade = ur.findById(grade.getUnidade().getId()).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unidade não Encontrada"));
		
		grade.setCalendario(calendario);
		grade.setServico(servico);
		grade.setUnidade(unidade);
		grade.setConfigurado("c");
		grade.setGerado("n");
		
		gr.save(grade);
	}
	
	public void gravarGradeDemanda(GradeDto gradeDto) {
		
		Servico servico = sr.findById(gradeDto.getServico()).orElseThrow(()->
			new ResponseStatusException(HttpStatus.BAD_REQUEST, "Serviço não Encontrado"));

		Unidade unidade = ur.findById(gradeDto.getUnidade()).orElseThrow(()->
			new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unidade não Encontrada"));
		
		for (Long i = gradeDto.getDataInicial(); i <= gradeDto.getDataFinal(); i++) {
			
			Calendario calendario =  cr.findById(i).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Calendario não Encontrado"));
			
			Grade grade = new Grade();
	
			grade.setCalendario(calendario);
			grade.setServico(servico);
			grade.setUnidade(unidade);
			grade.setConfigurado("c");
			grade.setGerado("n");
			grade.setCorrecaoHora(gradeDto.getCorrecaoHora());
			grade.setIntervalo(gradeDto.getIntervalo());
			grade.setQuantidade(gradeDto.getQuantidade());
			grade.setHoraInicial(gradeDto.getHoraInicial());
			grade.setHoraFinal(gradeDto.getHoraFinal());
			
			if(calendario.getObservacao().equals("Normal") ) {
				gr.save(grade);
			} else if (calendario.getObservacao().equals("Sábado")) {
				grade.setCorrecaoHora(6);
				grade.setIntervalo(30);
				grade.setQuantidade(50);
				grade.setHoraFinal("12:00");
				gr.save(grade);
			}
		}
	}
	
	public void alterar(Grade grade) {
		
		Optional<Grade> g = gr.findById(grade.getId());
		
		Calendario calendario = cr.findById(grade.getCalendario().getId()).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Calendario não Encontrado"));
		
		Servico servico = sr.findById(grade.getServico().getId()).orElseThrow(()-> 
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Serviço não Encontrado"));
		
		Unidade unidade = ur.findById(grade.getUnidade().getId()).orElseThrow(()->
				new ResponseStatusException(HttpStatus.BAD_REQUEST, "Unidade não Encontrado"));
		
		grade.setCalendario(calendario);
		grade.setServico(servico);
		grade.setUnidade(unidade);
		
		if(g.isPresent()) {
			gr.save(grade);
		}
		
	}
	
	public void liberarGrade(Long Id){
		Optional<Grade> g = gr.findById(Id);
		if(g.isPresent()) {
			g.get().setGerado("n");
			gr.save(g.get());
		}
	}

	public List<Grade> buscaAvancada(String unidade, String dataInicial, String dataFinal, String servico) {
		return gr.buscaAvancada(unidade, dataInicial, dataFinal, servico);
	}
}
